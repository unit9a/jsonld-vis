



export function isWotJsonLD (source){
    const rootContest = source['@context'];
    return rootContest && rootContest.td ===
        "https://www.w3.org/2019/wot/td#";
}