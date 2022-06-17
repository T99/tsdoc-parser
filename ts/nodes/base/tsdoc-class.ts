/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 8:27 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import { TSDocNode } from "./tsdoc-node";
import { TSDocPropertyOwner } from "./tsdoc-property-owner";
import { TSDocMethodOwner } from "./tsdoc-method-owner";
import { TSDocMemberOwner } from "./tsdoc-member-owner";
import { TSDocProperty } from "../tsdoc-property";
import { TSDocMethod } from "../tsdoc-method";

export abstract class TSDocClass extends TSDocNode<ts.ClassDeclaration>
	implements TSDocPropertyOwner, TSDocMethodOwner,
		TSDocMemberOwner<TSDocProperty | TSDocMethod> {
	
	public getName(): string {
		
		return this.getASTNode().name.escapedText as string;
		
	}
	
	public getSignature(): string {
		
		return "";
		
	}
	
	public getMembers(): Array<TSDocProperty | TSDocMethod> {
		
		return undefined;
		
	}
	
	public getMethods(): TSDocMethod {
		
		return undefined;
		
	}
	
	public getProperties(): TSDocProperty {
		
		return undefined;
		
	}
	
	public abstract isAbstract(): boolean;
	
}
