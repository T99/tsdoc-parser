/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:58 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import { TSDocClass } from "./base/tsdoc-class";

export class TSDocConcreteClass extends TSDocClass {
	
	public getTSDocType(): string {
		
		return "concrete class";
		
	}
	
	public isAbstract(): boolean {
		
		return false;
		
	}
	
}
