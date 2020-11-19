/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ReviewWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenRootTypes {
  Post: { // root type
    conteudo: string; // String!
    created_at?: NexusGenScalars['DateTime'] | null; // DateTime
    id: number; // Int!
    publicado?: boolean | null; // Boolean
    titulo: string; // String!
  }
  Query: {};
  Review: { // root type
    aprovado: boolean; // Boolean!
    id: number; // Int!
    nota: number; // Int!
  }
  User: { // root type
    created_at?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    id: number; // Int!
    nome: string; // String!
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  ReviewWhereUniqueInput: NexusGenInputs['ReviewWhereUniqueInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  DateTime: NexusGenScalars['DateTime'];
}

export interface NexusGenFieldTypes {
  Post: { // field return type
    autor: NexusGenRootTypes['User']; // User!
    conteudo: string; // String!
    created_at: NexusGenScalars['DateTime'] | null; // DateTime
    id: number; // Int!
    publicado: boolean | null; // Boolean
    titulo: string; // String!
  }
  Query: { // field return type
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Review: { // field return type
    aprovado: boolean; // Boolean!
    id: number; // Int!
    nota: number; // Int!
    post: NexusGenRootTypes['Post']; // Post!
    reviewer: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    created_at: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    id: number; // Int!
    nome: string; // String!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenFieldTypeNames {
  Post: { // field return type name
    autor: 'User'
    conteudo: 'String'
    created_at: 'DateTime'
    id: 'Int'
    publicado: 'Boolean'
    titulo: 'String'
  }
  Query: { // field return type name
    reviews: 'Review'
    user: 'User'
    users: 'User'
  }
  Review: { // field return type name
    aprovado: 'Boolean'
    id: 'Int'
    nota: 'Int'
    post: 'Post'
    reviewer: 'User'
  }
  User: { // field return type name
    created_at: 'DateTime'
    email: 'String'
    id: 'Int'
    nome: 'String'
    posts: 'Post'
  }
}

export interface NexusGenArgTypes {
  Query: {
    reviews: { // args
      after?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      before?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  User: {
    posts: { // args
      after?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      before?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Post" | "Query" | "Review" | "User";

export type NexusGenInputNames = "PostWhereUniqueInput" | "ReviewWhereUniqueInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}