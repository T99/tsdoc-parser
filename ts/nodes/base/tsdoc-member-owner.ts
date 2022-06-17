/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 11:05 AM -- June 17th, 2022
 * Project: tsdoc-parser
 */

import { TSDocNode } from "./tsdoc-node";

export interface TSDocMemberOwner<M extends TSDocNode> {

	getMembers(): M[];
	
}
