/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:58 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import { TSDocClass } from "./base/tsdoc-class";

export class TSDocAbstractClass extends TSDocClass {
	
	public getTSDocType(): string {
		
		return "abstract class";
		
	}
	
	public isAbstract(): boolean {
		
		return true;
		
	}
	
}
