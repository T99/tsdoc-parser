/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:40 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import { TSDocNode } from "./base/tsdoc-node";

export class TSDocFunction extends TSDocNode<ts.FunctionDeclaration> {
	
	public getName(): string {
		
		return "";
		
	}
	
	public getSignature(includeBlockPlaceholder: boolean = true): string {
		
		return "";
		
	}
	
}
