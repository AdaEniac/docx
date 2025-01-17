// Example on how to preserve word wrap text. Works with all languages.
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, Packer, Paragraph, TextRun, SpaceType } from "../build";

const doc = new Document({
    sections: [
        {
            children: [
                new Paragraph({
                    children: [
                        new TextRun("我今天遛狗去公园"),
                        new TextRun({
                            text: "456435234523456435564745673456345456435234523456435564745673456345456435234523456435564745673456345456435234523456435564745673456345456435234523456435564745673456345",
                            space: SpaceType.PRESERVE,
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                        ),
                        new TextRun({
                            text: "456435234523456435564745673456345456435234523456435564745673456345456435234523456435564745673456345456435234523456435564745673456345456435234523456435564745673456345",
                            space: SpaceType.PRESERVE,
                        }),
                    ],
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
