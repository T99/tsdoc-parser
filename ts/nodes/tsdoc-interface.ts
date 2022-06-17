/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:20 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import { TSDocNode } from "./base/tsdoc-node";

export class TSDocInterface extends TSDocNode<ts.InterfaceDeclaration> {
	
	public getName(): string {
		
		return this.astNode.name.escapedText as string;
		
	}
	
	public getSignature(): string {
		
		return "";
		
	}
	
}
