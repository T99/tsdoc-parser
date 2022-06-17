/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:46 PM -- June 16th, 2022
 * Project: tsdoc-parser
 */

import ts from "typescript";
import { TSDocDocumentationComment } from "../../doc-comments/tsdoc-documentation-comment";

/**
 * The most generic form of a node within the TSDoc ecosystem.
 * 
 * All types of TSDoc nodes are symbol types that support doc-comment usage,
 * such as classes, interfaces, methods, functions, properties, etc.
 * 
 * @author Trevor Sears <trevor@trevorsears.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class TSDocNode<N extends ts.Node = ts.Node,
	D extends TSDocDocumentationComment = TSDocDocumentationComment> {
	
	/**
	 * The underlying TypeScript AST node that this TSDocNode is wrapping.
	 */
	protected astNode: N;
	
	/**
	 * The TypeScript SourceFile object for the source file containing the code
	 * being represented by this TSDocNode.
	 */
	protected sourceFile: ts.SourceFile;
	
	/**
	 * An optional {@link TSDocDocumentationComment} (or sub-type) for the
	 * symbol/node being represented by this TSDocNode.
	 */
	protected documentation?: D;
	
	/**
	 * Initializes a new TSDocNode instance with the provided information.
	 * 
	 * @param {N} astNode The underlying TypeScript AST node that this TSDocNode
	 * is wrapping.
	 * @param {ts.SourceFile} sourceFile The TypeScript SourceFile object for
	 * the source file containing the code being represented by this TSDocNode.
	 * @param {D} documentation An optional {@link TSDocDocumentationComment}
	 * for this node.
	 */
	protected constructor(astNode: N, sourceFile: ts.SourceFile,
						  documentation?: D) {
		
		this.astNode = astNode;
		this.sourceFile = sourceFile;
		this.documentation = documentation;
		
	}
	
	/**
	 * Returns the underlying TypeScript AST node that this TSDocNode is
	 * wrapping.
	 * 
	 * @returns {N} The underlying TypeScript AST node that this TSDocNode is
	 * wrapping.
	 */
	public getASTNode(): N {
		
		return this.astNode;
		
	}
	
	/**
	 * Returns an integer value that corresponds to the 'kind' of the underlying
	 * symbol/node that this TSDocNode is wrapping.
	 * 
	 * @returns {ts.SyntaxKind} An integer value that corresponds to the 'kind'
	 * of the underlying symbol/node that this TSDocNode is wrapping.
	 */
	public getKind(): ts.SyntaxKind {
		
		return this.astNode.kind;
		
	}
	
	/**
	 * Returns a string representation of the 'kind' of the underlying
	 * symbol/node that this TSDocNode is wrapping.
	 *
	 * @returns {string} A string representation of the 'kind' of the underlying
	 * symbol/node that this TSDocNode is wrapping.
	 * @see ts.SyntaxKind
	 */
	public getKindAsString(): string {
		
		return ts.SyntaxKind[this.getKind()];
		
	}
	
	/**
	 * Returns a string identifier for the 'type' of this TSDocNode.
	 * 
	 * This method serves as a simplification over the TypeScript AST's 'kind'
	 * 
	 * @returns {string}
	 */
	public abstract getTSDocType(): string;
	
	/**
	 * Returns the TypeScript SourceFile object for the source file containing
	 * the code being represented by this TSDocNode.
	 * 
	 * @returns {ts.SourceFile} The TypeScript SourceFile object for the source
	 * file containing the code being represented by this TSDocNode.
	 */
	public getSourceFile(): ts.SourceFile {
		
		return this.sourceFile;
		
	}
	
	/**
	 * Returns the name of the symbol/node being represented by this TSDocNode.
	 * 
	 * @returns {string} The name of the symbol/node being represented by this
	 * TSDocNode.
	 */
	public abstract getName(): string;
	
	/**
	 * Returns the 'signature' of this symbol/node.
	 *
	 * For example, the signature of a class might be:
	 * 'export class Animal { ... }'.
	 * 
	 * @param {boolean} includeBlockPlaceholder Set to true to include
	 * placeholder text for the block associated with the underlying symbol, if
	 * such a block is present. The placeholder text is simply: ' { ... }'.
	 * @returns {string} The 'signature' of this symbol/node.
	 */
	
	public abstract getSignature(includeBlockPlaceholder?: boolean): string;
	
	/**
	 * Returns true if this TSDocNode has associated documentation.
	 * 
	 * @returns {boolean} true if this TSDocNode has associated documentation.
	 * @see TSDocNode#getDocumentation
	 */
	public hasDocumentation(): boolean {
		
		return this.documentation != null;
		
	}
	
	/**
	 * Returns the {@link TSDocDocumentationComment} (or sub-type) for the
	 * symbol/node being represented by this TSDocNode, or undefined if the
	 * aforementioned node is undocumented.
	 * 
	 * @returns {D | undefined} The {@link TSDocDocumentationComment} (or
	 * sub-type) for the symbol/node being represented by this TSDocNode, or
	 * undefined if the aforementioned node is undocumented.
	 * @see TSDocNode#hasDocumentation
	 */
	public getDocumentation(): D | undefined {
		
		return this.documentation;
		
	}
	
}
