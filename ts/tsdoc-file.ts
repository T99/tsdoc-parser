/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:51 PM -- June 16th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import fs from "fs/promises";
import path from "path";

export class TSDocFile {
	
	protected static readonly DEFAULT_FILE_NAME: string = "code.ts";
	
	protected fileName?: string;
	
	protected rawContent: string;
	
	protected sourceFile: ts.SourceFile;
	
	protected constructor(rawContent: string, fileName: string | null,
		languageVersionOrOptions: ts.ScriptTarget | ts.CreateSourceFileOptions
	) {
		
		this.fileName = fileName ?? TSDocFile.DEFAULT_FILE_NAME;
		this.rawContent = rawContent;
		this.sourceFile = ts.createSourceFile(
			this.fileName,
			this.rawContent,
			languageVersionOrOptions
		);
		
	}
	
	public static fromStringFileContents(rawContent: string,
		fileName: string | null,
		languageVersionOrOptions: ts.ScriptTarget | ts.CreateSourceFileOptions
	): TSDocFile {
		
		return new TSDocFile(rawContent, fileName, languageVersionOrOptions);
		
	}
	
	public static async fromFile(filePath: string,
		languageVersionOrOptions: ts.ScriptTarget | ts.CreateSourceFileOptions
	): Promise<TSDocFile> {
		
		return new TSDocFile(
			(await fs.readFile(filePath)).toString(),
			path.basename(filePath),
			languageVersionOrOptions
		);
		
	}
	
}
