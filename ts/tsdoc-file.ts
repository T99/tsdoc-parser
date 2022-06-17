/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 6:51 PM -- June 16th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import fs from "fs/promises";
import path from "path";
import { TSDocNode } from "./nodes/base/tsdoc-node";
import { TSDocFunction } from "./nodes/tsdoc-function";
import { TSDocInterface } from "./nodes/tsdoc-interface";
import { TSDocClass } from "./nodes/base/tsdoc-class";

export class TSDocFile {
	
	protected static readonly DEFAULT_FILE_NAME: string = "code.ts";
	
	protected static readonly ALLOWED_NODE_KINDS: number[] = [
		ts.SyntaxKind.InterfaceDeclaration,
		ts.SyntaxKind.ClassDeclaration,
		ts.SyntaxKind.PropertyDeclaration,
		ts.SyntaxKind.MethodDeclaration,
		ts.SyntaxKind.FunctionDeclaration
	];
	
	protected fileName?: string;
	
	protected rawContent: string;
	
	protected sourceFile: ts.SourceFile;
	
	protected children: TSDocNode[];
	
	protected interfaces: TSDocInterface[];
	
	protected classes: TSDocClass[];
	
	protected concreteClasses: number[];
	
	protected abstractClasses: number[];
	
	protected functions: TSDocFunction[];
	
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
		
		this.sourceFile.getChildren(this.sourceFile).filter(
			(node: ts.Node): boolean =>
				TSDocFile.ALLOWED_NODE_KINDS.includes(node.kind)
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
	
	public hasFileName(): boolean {
		
		return this.fileName !== undefined;
		
	}
	
	public getFileName(): string | undefined {
		
		return this.fileName;
		
	}
	
	public getRawContent(): string {
		
		return this.rawContent;
		
	}
	
	public getSourceFileASTNode(): ts.SourceFile {
		
		return this.sourceFile;
		
	}
	
	public getChildren(): TSDocNode[] {
		
		return this.children;
		
	}
	
}
