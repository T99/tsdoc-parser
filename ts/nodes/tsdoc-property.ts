/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 9:51 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import { TSDocNode } from "./base/tsdoc-node";

export class TSDocProperty extends TSDocNode<ts.PropertyDeclaration> {
	
	public getName(): string {
		
		return "";
		
	}
	
	public getSignature(): string {
		
		return "";
		
	}
	
}
