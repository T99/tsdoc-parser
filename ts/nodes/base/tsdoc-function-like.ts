/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:02 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import { TSDocNode } from "./tsdoc-node";

export class TSDocFunctionLike<N extends ts.FunctionLikeDeclaration>
	extends TSDocNode<N> {
	
	public getName(): string {
		
		if (this.astNode.name !== undefined &&
			"escapedText" in this.astNode.name) {
			
			return this.astNode.name.escapedText as string;
			
		} else {
			
			throw new Error("Failed to ascertain name of function-like node.");
			
		}
		
	}
	
	public getSignature(includeBlockPlaceholder: boolean | undefined): string {
		
		let blockStartOffset: number =
			this.astNode.body.getStart(this.getSourceFile(), false) -
			this.astNode.getStart(this.getSourceFile(), false) 
		
		return this.getASTNode().getText(this.getSourceFile()).substring(
			0,
			
		);
		
	}
	
	public getReturnType(): string | undefined {
		
		return this.astNode.type?.getText(this.getSourceFile());
		
	}
	
}
