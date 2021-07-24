import Layout, { PageMeta } from "components/Layout";
import FileSaver from "file-saver";
import JSZip from "jszip";
import React from "react";
import { convertImageToCanvas } from "utils";

interface State {
    inputUrl: string;
    downloading: boolean;
    prefixFilename: string;
    progress: number;
}

const pageMeta: PageMeta = {
    title: "Download osmosis.org Notes",
    description: "Download document from osmosis.org Notes",
};

class OsmosisNotes extends React.Component<{}, State> {
    state = {
        inputUrl: "https://www.osmosis.org/notes/Hemodynamics",
        downloading: false,
        prefixFilename: "Chapter_1",
        progress: 0,
    };
    pngListRef = React.createRef<HTMLDivElement>();

    onChangeUrl = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputUrl: ev.target.value,
        });
    };

    onChangePrefix = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            prefixFilename: ev.target.value,
        });
    };

    downloadSVGFronUrl = (src: string): Promise<string> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.setAttribute("style", "flex:1;margin:5px;height:400px;object-fit:contain;");
            img.crossOrigin = "anonymous";
            img.onload = () => {
                const canvas = convertImageToCanvas(img);
                const imgData = canvas.toDataURL();
                this.pngListRef.current?.appendChild(img);
                resolve(imgData);
            };

            img.src = src;
        });
    };

    onDownload = () => {
        if (this.state.downloading) return;
        this.setState({
            downloading: true,
            progress: 0,
        });
        if (this.pngListRef.current) {
            this.pngListRef.current.innerHTML = "";
        }
        const { inputUrl, prefixFilename } = this.state;
        fetch(inputUrl).then((res) => {
            res.text().then((html) => {
                const parser = new DOMParser();
                const htmlDom = parser.parseFromString(html, "text/html");
                const nodes = htmlDom.getElementsByClassName("notes")[0]?.childNodes;
                if (!nodes) {
                    alert("Not support!");
                    this.setState({
                        downloading: false,
                        progress: 0,
                    });

                    return;
                }
                const urls: string[] = [];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                nodes.forEach((i: any) => {
                    urls.push(i.data);
                });
                const pageCountPercent = 100 / urls.length;
                const zip = new JSZip();
                const zipFilename = "HemodynamicsNotes.zip";
                urls.forEach(async (url, index) => {
                    const filename = `${prefixFilename}_page_${index + 1}.png`;
                    const dataImg = await this.downloadSVGFronUrl(`https://cors-anywhere.herokuapp.com/${url}`);
                    zip.file(filename, dataImg.split("base64,")[1], { base64: true });

                    if (index === urls.length - 1) {
                        zip.generateAsync({ type: "blob" }).then((blob) => {
                            FileSaver.saveAs(blob, zipFilename);
                            this.setState({
                                downloading: false,
                                progress: 100,
                            });
                        });
                    } else {
                        this.setState((prev) => ({
                            progress: prev.progress + pageCountPercent,
                        }));
                    }
                });
            });
        });
    };

    render() {
        const { inputUrl, downloading, prefixFilename, progress } = this.state;

        return (
            <Layout meta={pageMeta}>
                <div className="flex flex-col align-items-center">
                    <a
                        href="https://cors-anywhere.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-2"
                    >
                        Please click here to allow CORS
                    </a>
                    <input
                        className="p-2 width-full"
                        placeholder="Enter url"
                        value={inputUrl}
                        onChange={this.onChangeUrl}
                    />
                    <div className="mt-2 flex align-items-center">
                        Prefix filename:
                        <input
                            className="p-2 ml-2"
                            placeholder="Enter prefix filename"
                            value={prefixFilename}
                            onChange={this.onChangePrefix}
                        />
                    </div>
                    <button
                        className="m-2"
                        style={{
                            cursor: downloading ? "progress" : "pointer",
                        }}
                        type="button"
                        onClick={this.onDownload}
                    >
                        Download
                    </button>
                    <progress value={progress} max={100} />
                    <div ref={this.pngListRef} className="flex flex-row" />
                </div>
            </Layout>
        );
    }
}

export default OsmosisNotes;
