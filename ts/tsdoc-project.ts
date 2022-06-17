/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:49 PM -- June 16th, 2022
 * Project: tsdoc-parser
 */

import { TSDocFile } from "./tsdoc-file";
import ts from "typescript";

export class TSDocProject {
	
	protected files: TSDocFile[];
	
	public constructor(...files: TSDocFile[]) {
		
		this.files = files;
		
	}
	
	public static async fromFilePathList(...filePaths: string[],
		languageVersionOrOptions: ts.ScriptTarget | ts.CreateSourceFileOptions
	): Promise<TSDocProject> {
		
		return new TSDocProject(
			filePaths.map((filePath: string): TSDocFile =>
				TSDocFile.fromFile(filePath, languageVersionOrOptions))
		);
		
	}
	
}
