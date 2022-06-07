export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CanEditTypeEnum {
  Inherit = 'Inherit',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export enum CanViewTypeEnum {
  Anyone = 'Anyone',
  Inherit = 'Inherit',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

/** Formatting options for fields that map to DBDatetime data types */
export enum DbDatetimeFormattingOption {
  Custom = 'CUSTOM',
  Date = 'DATE',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  Full = 'FULL',
  Long = 'LONG',
  Month = 'MONTH',
  Nice = 'NICE',
  Short = 'SHORT',
  ShortMonth = 'SHORT_MONTH',
  Time = 'TIME',
  Time12 = 'TIME12',
  Time24 = 'TIME24',
  Timestamp = 'TIMESTAMP',
  Year = 'YEAR'
}

export type DbFileComposite = {
  __typename?: 'DBFileComposite';
  filename?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type DbPolymorphicForeignKeyComposite = {
  __typename?: 'DBPolymorphicForeignKeyComposite';
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** Formatting options for fields that map to DBText data types */
export enum DbTextFormattingOption {
  ContextSummary = 'CONTEXT_SUMMARY',
  FirstParagraph = 'FIRST_PARAGRAPH',
  LimitSentences = 'LIMIT_SENTENCES',
  Summary = 'SUMMARY'
}

/** The common interface shared by all DataObject types */
export type DataObject = {
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type File = DataObject & FileInterface & {
  __typename?: 'File';
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<File | Folder | Image>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FileAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileLinkSortFields>;
};


export type FileCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FileEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type FileExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FileLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type FileFilterFields = {
  backLinks?: Maybe<FileLinkFilterFields>;
  className?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  editorGroups?: Maybe<GroupFilterFields>;
  fileFilename?: Maybe<QueryFilterStringComparator>;
  fileHash?: Maybe<QueryFilterStringComparator>;
  fileVariant?: Maybe<QueryFilterStringComparator>;
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  owner?: Maybe<MemberFilterFields>;
  ownerID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<FileFilterFields>;
  parentID?: Maybe<QueryFilterIdComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  viewerGroups?: Maybe<GroupFilterFields>;
};

export type FileInterface = {
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<File | Folder | Image>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FileInterfaceAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileLinkSortFields>;
};


export type FileInterfaceCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FileInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type FileInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FileInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type FileInterfaceConnection = {
  __typename?: 'FileInterfaceConnection';
  edges: Array<FileInterfaceConnectionEdge>;
  nodes: Array<File | Folder | Image>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FileInterfaceConnectionEdge = {
  __typename?: 'FileInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: File | Folder | Image;
};

export type FileLink = DataObject & {
  __typename?: 'FileLink';
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  linked?: Maybe<File | Folder | Image>;
  linkedID: Scalars['ID'];
  parent?: Maybe<DbPolymorphicForeignKeyComposite>;
  parentClass?: Maybe<ParentClassEnum>;
  parentID?: Maybe<Scalars['Int']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type FileLinkCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FileLinkExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLinkHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FileLinkLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FileLinkTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type FileLinkConnection = {
  __typename?: 'FileLinkConnection';
  edges: Array<FileLinkConnectionEdge>;
  nodes: Array<FileLink>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FileLinkConnectionEdge = {
  __typename?: 'FileLinkConnectionEdge';
  /** The node at the end of the collections edge */
  node: FileLink;
};

export type FileLinkFilterFields = {
  className?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  linked?: Maybe<FileFilterFields>;
  linkedID?: Maybe<QueryFilterIdComparator>;
  parentID?: Maybe<QueryFilterIntComparator>;
};

export type FileLinkSortFields = {
  className?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  linked?: Maybe<FileSortFields>;
  linkedID?: Maybe<SortDirection>;
  parentID?: Maybe<SortDirection>;
};

export type FileSortFields = {
  backLinks?: Maybe<FileLinkSortFields>;
  className?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  editorGroups?: Maybe<GroupSortFields>;
  fileFilename?: Maybe<SortDirection>;
  fileHash?: Maybe<SortDirection>;
  fileVariant?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  owner?: Maybe<MemberSortFields>;
  ownerID?: Maybe<SortDirection>;
  parent?: Maybe<FileSortFields>;
  parentID?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  viewerGroups?: Maybe<GroupSortFields>;
};

export type Folder = DataObject & FileInterface & FolderInterface & {
  __typename?: 'Folder';
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<File | Folder | Image>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FolderAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileLinkSortFields>;
};


export type FolderCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FolderEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type FolderExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FolderLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type FolderFilterFields = {
  backLinks?: Maybe<FileLinkFilterFields>;
  className?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  editorGroups?: Maybe<GroupFilterFields>;
  fileFilename?: Maybe<QueryFilterStringComparator>;
  fileHash?: Maybe<QueryFilterStringComparator>;
  fileVariant?: Maybe<QueryFilterStringComparator>;
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  owner?: Maybe<MemberFilterFields>;
  ownerID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<FileFilterFields>;
  parentID?: Maybe<QueryFilterIdComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  viewerGroups?: Maybe<GroupFilterFields>;
};

export type FolderInterface = {
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<File | Folder | Image>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type FolderInterfaceAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileLinkSortFields>;
};


export type FolderInterfaceCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FolderInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type FolderInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type FolderInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type FolderInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type FolderInterfaceConnection = {
  __typename?: 'FolderInterfaceConnection';
  edges: Array<FolderInterfaceConnectionEdge>;
  nodes: Array<Folder>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type FolderInterfaceConnectionEdge = {
  __typename?: 'FolderInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Folder;
};

export type FolderSortFields = {
  backLinks?: Maybe<FileLinkSortFields>;
  className?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  editorGroups?: Maybe<GroupSortFields>;
  fileFilename?: Maybe<SortDirection>;
  fileHash?: Maybe<SortDirection>;
  fileVariant?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  owner?: Maybe<MemberSortFields>;
  ownerID?: Maybe<SortDirection>;
  parent?: Maybe<FileSortFields>;
  parentID?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  viewerGroups?: Maybe<GroupSortFields>;
};

export type GeneratedFragment = {
  __typename?: 'GeneratedFragment';
  fragment?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type Group = DataObject & {
  __typename?: 'Group';
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type GroupExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type GroupHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type GroupTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type GroupConnection = {
  __typename?: 'GroupConnection';
  edges: Array<GroupConnectionEdge>;
  nodes: Array<Group>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type GroupConnectionEdge = {
  __typename?: 'GroupConnectionEdge';
  /** The node at the end of the collections edge */
  node: Group;
};

export type GroupFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type GroupSortFields = {
  id?: Maybe<SortDirection>;
};

export type Image = DataObject & FileInterface & ImageInterface & {
  __typename?: 'Image';
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<File | Folder | Image>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type ImageAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileLinkSortFields>;
};


export type ImageCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type ImageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type ImageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type ImageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type ImageFilterFields = {
  backLinks?: Maybe<FileLinkFilterFields>;
  className?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  editorGroups?: Maybe<GroupFilterFields>;
  fileFilename?: Maybe<QueryFilterStringComparator>;
  fileHash?: Maybe<QueryFilterStringComparator>;
  fileVariant?: Maybe<QueryFilterStringComparator>;
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  name?: Maybe<QueryFilterStringComparator>;
  owner?: Maybe<MemberFilterFields>;
  ownerID?: Maybe<QueryFilterIdComparator>;
  parent?: Maybe<FileFilterFields>;
  parentID?: Maybe<QueryFilterIdComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  viewerGroups?: Maybe<GroupFilterFields>;
};

export type ImageInterface = {
  absoluteLink?: Maybe<Scalars['String']>;
  backLinks: FileLinkConnection;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  file?: Maybe<DbFileComposite>;
  fileFilename?: Maybe<Scalars['String']>;
  fileHash?: Maybe<Scalars['String']>;
  fileVariant?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Member>;
  ownerID: Scalars['ID'];
  parent?: Maybe<File | Folder | Image>;
  parentID: Scalars['ID'];
  showInSearch?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type ImageInterfaceAbsoluteLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceBackLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileLinkSortFields>;
};


export type ImageInterfaceCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type ImageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type ImageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type ImageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type ImageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type ImageInterfaceConnection = {
  __typename?: 'ImageInterfaceConnection';
  edges: Array<ImageInterfaceConnectionEdge>;
  nodes: Array<Image>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type ImageInterfaceConnectionEdge = {
  __typename?: 'ImageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Image;
};

export type ImageSortFields = {
  backLinks?: Maybe<FileLinkSortFields>;
  className?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  editorGroups?: Maybe<GroupSortFields>;
  fileFilename?: Maybe<SortDirection>;
  fileHash?: Maybe<SortDirection>;
  fileVariant?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  name?: Maybe<SortDirection>;
  owner?: Maybe<MemberSortFields>;
  ownerID?: Maybe<SortDirection>;
  parent?: Maybe<FileSortFields>;
  parentID?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  viewerGroups?: Maybe<GroupSortFields>;
};

export type Member = DataObject & {
  __typename?: 'Member';
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type MemberExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type MemberTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};

export type MemberFilterFields = {
  id?: Maybe<QueryFilterIdComparator>;
};

export type MemberSortFields = {
  id?: Maybe<SortDirection>;
};

export type Page = DataObject & PageInterface & SiteTreeInterface & {
  __typename?: 'Page';
  breadcrumbs: Array<Page>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<Page>;
  parent?: Maybe<Page | SiteTree>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type PageBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PageChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type PageContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type PageEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type PageExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type PageLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type PageTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type PageFilterFields = {
  className?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  editorGroups?: Maybe<GroupFilterFields>;
  extraMeta?: Maybe<QueryFilterStringComparator>;
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  metaDescription?: Maybe<QueryFilterStringComparator>;
  navParent?: Maybe<PageFilterFields>;
  parent?: Maybe<SiteTreeFilterFields>;
  parentID?: Maybe<QueryFilterIdComparator>;
  showInMenus?: Maybe<QueryFilterBooleanComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  viewerGroups?: Maybe<GroupFilterFields>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  totalCount: Scalars['Int'];
};

export type PageInterface = {
  breadcrumbs: Array<Page>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<Page>;
  parent?: Maybe<Page | SiteTree>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type PageInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type PageInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type PageInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageInterfaceCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type PageInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type PageInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type PageInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type PageInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type PageInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type PageInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type PageInterfaceConnection = {
  __typename?: 'PageInterfaceConnection';
  edges: Array<PageInterfaceConnectionEdge>;
  nodes: Array<Page>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type PageInterfaceConnectionEdge = {
  __typename?: 'PageInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Page;
};

export type PageSortFields = {
  className?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  editorGroups?: Maybe<GroupSortFields>;
  extraMeta?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  metaDescription?: Maybe<SortDirection>;
  navParent?: Maybe<PageSortFields>;
  parent?: Maybe<SiteTreeSortFields>;
  parentID?: Maybe<SortDirection>;
  showInMenus?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  viewerGroups?: Maybe<GroupSortFields>;
};

export enum ParentClassEnum {
  Page = 'Page',
  SilverStripeAssetsFile = 'SilverStripeAssetsFile',
  SilverStripeAssetsFolder = 'SilverStripeAssetsFolder',
  SilverStripeAssetsImage = 'SilverStripeAssetsImage',
  SilverStripeAssetsShortcodesFileLink = 'SilverStripeAssetsShortcodesFileLink',
  SilverStripeCmsModelRedirectorPage = 'SilverStripeCMSModelRedirectorPage',
  SilverStripeCmsModelSiteTree = 'SilverStripeCMSModelSiteTree',
  SilverStripeCmsModelSiteTreeLink = 'SilverStripeCMSModelSiteTreeLink',
  SilverStripeCmsModelVirtualPage = 'SilverStripeCMSModelVirtualPage',
  SilverStripeErrorPageErrorPage = 'SilverStripeErrorPageErrorPage',
  SilverStripeHeadlessModelIncomingWebhook = 'SilverStripeHeadlessModelIncomingWebhook',
  SilverStripeHeadlessModelOutgoingWebhook = 'SilverStripeHeadlessModelOutgoingWebhook',
  SilverStripeHeadlessModelPublishEvent = 'SilverStripeHeadlessModelPublishEvent',
  SilverStripeHeadlessModelPublishQueueItem = 'SilverStripeHeadlessModelPublishQueueItem',
  SilverStripeNextJsModelLinkIndex = 'SilverStripeNextJSModelLinkIndex',
  SilverStripeNextJsModelRecentPagesCollector = 'SilverStripeNextJSModelRecentPagesCollector',
  SilverStripeNextJsModelSectionCollector = 'SilverStripeNextJSModelSectionCollector',
  SilverStripeNextJsModelStaticBuild = 'SilverStripeNextJSModelStaticBuild',
  SilverStripeNextJsModelStaticBuildCollector = 'SilverStripeNextJSModelStaticBuildCollector',
  SilverStripeSecurityGroup = 'SilverStripeSecurityGroup',
  SilverStripeSecurityLoginAttempt = 'SilverStripeSecurityLoginAttempt',
  SilverStripeSecurityMember = 'SilverStripeSecurityMember',
  SilverStripeSecurityMemberPassword = 'SilverStripeSecurityMemberPassword',
  SilverStripeSecurityPermission = 'SilverStripeSecurityPermission',
  SilverStripeSecurityPermissionRole = 'SilverStripeSecurityPermissionRole',
  SilverStripeSecurityPermissionRoleCode = 'SilverStripeSecurityPermissionRoleCode',
  SilverStripeSecurityRememberLoginHash = 'SilverStripeSecurityRememberLoginHash',
  SilverStripeSessionManagerModelsLoginSession = 'SilverStripeSessionManagerModelsLoginSession',
  SilverStripeSiteConfigSiteConfig = 'SilverStripeSiteConfigSiteConfig',
  SilverStripeVersionedChangeSet = 'SilverStripeVersionedChangeSet',
  SilverStripeVersionedChangeSetItem = 'SilverStripeVersionedChangeSetItem',
  SminneeApiKeyMemberApiKey = 'SminneeApiKeyMemberApiKey'
}

export type Query = {
  __typename?: 'Query';
  generateFragments: Array<GeneratedFragment>;
  readFileLinks: FileLinkConnection;
  readFiles: FileInterfaceConnection;
  readFolders: FolderInterfaceConnection;
  readImages: ImageInterfaceConnection;
  readOneFile?: Maybe<File | Folder | Image>;
  readOneFileLink?: Maybe<FileLink>;
  readOneFolder?: Maybe<Folder>;
  readOneImage?: Maybe<Image>;
  readOnePage?: Maybe<Page>;
  readOneSiteConfig?: Maybe<SiteConfig>;
  readOneSiteTree?: Maybe<Page | SiteTree>;
  readPages: PageInterfaceConnection;
  readSiteConfigs: SiteConfigConnection;
  readSiteTrees: SiteTreeInterfaceConnection;
  /** The list of link/type tuples that should be added to the static build */
  staticBuild: StaticBuildPayload;
  typesForLinks: Array<TypeResolution>;
};


export type QueryGenerateFragmentsArgs = {
  baseClass: Scalars['String'];
  baseFields?: Maybe<Array<Scalars['String']>>;
  includeBase?: Maybe<Scalars['Boolean']>;
  maxNesting?: Scalars['Int'];
};


export type QueryReadFileLinksArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileLinkSortFields>;
};


export type QueryReadFilesArgs = {
  filter?: Maybe<FileFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FileSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadFoldersArgs = {
  filter?: Maybe<FolderFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<FolderSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadImagesArgs = {
  filter?: Maybe<ImageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<ImageSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadOneFileArgs = {
  filter?: Maybe<FileFilterFields>;
  sort?: Maybe<FileSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadOneFileLinkArgs = {
  filter?: Maybe<FileLinkFilterFields>;
  sort?: Maybe<FileLinkSortFields>;
};


export type QueryReadOneFolderArgs = {
  filter?: Maybe<FolderFilterFields>;
  sort?: Maybe<FolderSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadOneImageArgs = {
  filter?: Maybe<ImageFilterFields>;
  sort?: Maybe<ImageSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadOnePageArgs = {
  filter?: Maybe<PageFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<PageSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadOneSiteConfigArgs = {
  filter?: Maybe<SiteConfigFilterFields>;
  sort?: Maybe<SiteConfigSortFields>;
};


export type QueryReadOneSiteTreeArgs = {
  filter?: Maybe<SiteTreeFilterFields>;
  link?: Maybe<Scalars['String']>;
  sort?: Maybe<SiteTreeSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadPagesArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryReadSiteConfigsArgs = {
  filter?: Maybe<SiteConfigFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteConfigSortFields>;
};


export type QueryReadSiteTreesArgs = {
  filter?: Maybe<SiteTreeFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  links?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<SiteTreeSortFields>;
  versioning?: Maybe<VersionedInputType>;
};


export type QueryTypesForLinksArgs = {
  links: Array<Scalars['String']>;
};

export type QueryFilterBooleanComparator = {
  contains?: Maybe<Scalars['Boolean']>;
  endswith?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  startswith?: Maybe<Scalars['Boolean']>;
};

export type QueryFilterIdComparator = {
  contains?: Maybe<Scalars['ID']>;
  endswith?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  startswith?: Maybe<Scalars['ID']>;
};

export type QueryFilterIntComparator = {
  contains?: Maybe<Scalars['Int']>;
  endswith?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  startswith?: Maybe<Scalars['Int']>;
};

export type QueryFilterStringComparator = {
  contains?: Maybe<Scalars['String']>;
  endswith?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  startswith?: Maybe<Scalars['String']>;
};

export type SiteConfig = DataObject & {
  __typename?: 'SiteConfig';
  canCreateTopLevelType?: Maybe<SiteConfigCanEditTypeEnum>;
  canEditType?: Maybe<SiteConfigCanEditTypeEnum>;
  canViewType?: Maybe<SiteConfigCanViewTypeEnum>;
  className?: Maybe<Scalars['String']>;
  createTopLevelGroups: GroupConnection;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  viewerGroups: GroupConnection;
};


export type SiteConfigCreateTopLevelGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type SiteConfigCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type SiteConfigEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type SiteConfigExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type SiteConfigTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteConfigViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export enum SiteConfigCanEditTypeEnum {
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export enum SiteConfigCanViewTypeEnum {
  Anyone = 'Anyone',
  LoggedInUsers = 'LoggedInUsers',
  OnlyTheseUsers = 'OnlyTheseUsers'
}

export type SiteConfigConnection = {
  __typename?: 'SiteConfigConnection';
  edges: Array<SiteConfigConnectionEdge>;
  nodes: Array<SiteConfig>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteConfigConnectionEdge = {
  __typename?: 'SiteConfigConnectionEdge';
  /** The node at the end of the collections edge */
  node: SiteConfig;
};

export type SiteConfigFilterFields = {
  className?: Maybe<QueryFilterStringComparator>;
  createTopLevelGroups?: Maybe<GroupFilterFields>;
  created?: Maybe<QueryFilterStringComparator>;
  editorGroups?: Maybe<GroupFilterFields>;
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  tagline?: Maybe<QueryFilterStringComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  viewerGroups?: Maybe<GroupFilterFields>;
};

export type SiteConfigSortFields = {
  className?: Maybe<SortDirection>;
  createTopLevelGroups?: Maybe<GroupSortFields>;
  created?: Maybe<SortDirection>;
  editorGroups?: Maybe<GroupSortFields>;
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  tagline?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  viewerGroups?: Maybe<GroupSortFields>;
};

export type SiteTree = DataObject & SiteTreeInterface & {
  __typename?: 'SiteTree';
  breadcrumbs: Array<Page>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<Page>;
  parent?: Maybe<Page | SiteTree>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type SiteTreeBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type SiteTreeEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type SiteTreeExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type SiteTreeLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type SiteTreeFilterFields = {
  className?: Maybe<QueryFilterStringComparator>;
  content?: Maybe<QueryFilterStringComparator>;
  created?: Maybe<QueryFilterStringComparator>;
  editorGroups?: Maybe<GroupFilterFields>;
  extraMeta?: Maybe<QueryFilterStringComparator>;
  id?: Maybe<QueryFilterIdComparator>;
  lastEdited?: Maybe<QueryFilterStringComparator>;
  menuTitle?: Maybe<QueryFilterStringComparator>;
  metaDescription?: Maybe<QueryFilterStringComparator>;
  navParent?: Maybe<PageFilterFields>;
  parent?: Maybe<SiteTreeFilterFields>;
  parentID?: Maybe<QueryFilterIdComparator>;
  showInMenus?: Maybe<QueryFilterBooleanComparator>;
  showInSearch?: Maybe<QueryFilterBooleanComparator>;
  sort?: Maybe<QueryFilterIntComparator>;
  title?: Maybe<QueryFilterStringComparator>;
  urlSegment?: Maybe<QueryFilterStringComparator>;
  version?: Maybe<QueryFilterIntComparator>;
  viewerGroups?: Maybe<GroupFilterFields>;
};

export type SiteTreeInterface = {
  breadcrumbs: Array<Page>;
  canEditType?: Maybe<CanEditTypeEnum>;
  canViewType?: Maybe<CanViewTypeEnum>;
  children: PageInterfaceConnection;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  editorGroups: GroupConnection;
  exists: Scalars['Boolean'];
  extraMeta?: Maybe<Scalars['String']>;
  hashID: Scalars['String'];
  id: Scalars['ID'];
  lastEdited?: Maybe<Scalars['String']>;
  link: Scalars['String'];
  menuTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  navChildren: PageInterfaceConnection;
  navParent?: Maybe<Page>;
  parent?: Maybe<Page | SiteTree>;
  parentID: Scalars['ID'];
  showInMenus?: Maybe<Scalars['Boolean']>;
  showInSearch?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  typeAncestry?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  urlSegment?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  viewerGroups: GroupConnection;
};


export type SiteTreeInterfaceBreadcrumbsArgs = {
  filter?: Maybe<PageFilterFields>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeInterfaceChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeInterfaceContentArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeInterfaceCreatedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type SiteTreeInterfaceEditorGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};


export type SiteTreeInterfaceExistsArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceExtraMetaArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
  parseShortcodes?: Maybe<Scalars['Boolean']>;
};


export type SiteTreeInterfaceHashIdArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceLastEditedArgs = {
  customFormat?: Maybe<Scalars['String']>;
  format?: Maybe<DbDatetimeFormattingOption>;
};


export type SiteTreeInterfaceLinkArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceMetaDescriptionArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceNavChildrenArgs = {
  filter?: Maybe<PageFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<PageSortFields>;
};


export type SiteTreeInterfaceTypeAncestryArgs = {
  format?: Maybe<DbTextFormattingOption>;
  limit?: Maybe<Scalars['Int']>;
};


export type SiteTreeInterfaceViewerGroupsArgs = {
  filter?: Maybe<GroupFilterFields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<GroupSortFields>;
};

export type SiteTreeInterfaceConnection = {
  __typename?: 'SiteTreeInterfaceConnection';
  edges: Array<SiteTreeInterfaceConnectionEdge>;
  nodes: Array<Page | SiteTree>;
  pageInfo: PageInfo;
};

/** The collections edge */
export type SiteTreeInterfaceConnectionEdge = {
  __typename?: 'SiteTreeInterfaceConnectionEdge';
  /** The node at the end of the collections edge */
  node: Page | SiteTree;
};

export type SiteTreeSortFields = {
  className?: Maybe<SortDirection>;
  content?: Maybe<SortDirection>;
  created?: Maybe<SortDirection>;
  editorGroups?: Maybe<GroupSortFields>;
  extraMeta?: Maybe<SortDirection>;
  id?: Maybe<SortDirection>;
  lastEdited?: Maybe<SortDirection>;
  menuTitle?: Maybe<SortDirection>;
  metaDescription?: Maybe<SortDirection>;
  navParent?: Maybe<PageSortFields>;
  parent?: Maybe<SiteTreeSortFields>;
  parentID?: Maybe<SortDirection>;
  showInMenus?: Maybe<SortDirection>;
  showInSearch?: Maybe<SortDirection>;
  sort?: Maybe<SortDirection>;
  title?: Maybe<SortDirection>;
  urlSegment?: Maybe<SortDirection>;
  version?: Maybe<SortDirection>;
  viewerGroups?: Maybe<GroupSortFields>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StaticBuildLink = {
  __typename?: 'StaticBuildLink';
  link: Scalars['String'];
};

export type StaticBuildPayload = {
  __typename?: 'StaticBuildPayload';
  links: Array<StaticBuildLink>;
  typeAncestry: Array<TypeAncestry>;
};

export type TypeAncestry = {
  __typename?: 'TypeAncestry';
  ancestry: Array<Scalars['String']>;
  type: Scalars['String'];
};

export type TypeResolution = {
  __typename?: 'TypeResolution';
  link: Scalars['String'];
  type: Scalars['String'];
};

export type VersionedInputType = {
  /** The date to use for archive */
  archiveDate?: Maybe<Scalars['String']>;
  mode?: Maybe<VersionedQueryMode>;
  /** If mode is STATUS, specify which versioned statuses */
  status?: Maybe<Array<Maybe<VersionedStatus>>>;
  version?: Maybe<Scalars['Int']>;
};

/** The versioned mode to use */
export enum VersionedQueryMode {
  /** Reads all versionse */
  AllVersions = 'ALL_VERSIONS',
  /** Read from a specific date of the archive */
  Archive = 'ARCHIVE',
  /** Read from the draft stage */
  Draft = 'DRAFT',
  /** Read the latest version */
  Latest = 'LATEST',
  /** Read from the live stage */
  Live = 'LIVE',
  /** Read only records with a specific status */
  Status = 'STATUS',
  /** Read a specific version */
  Version = 'VERSION'
}

/** The stage to read from or write to */
export enum VersionedStatus {
  /** Only records that have been archived */
  Archived = 'ARCHIVED',
  /** Only draft records */
  Draft = 'DRAFT',
  /** Only records that have unpublished changes */
  Modified = 'MODIFIED',
  /** Only published records */
  Published = 'PUBLISHED'
}
