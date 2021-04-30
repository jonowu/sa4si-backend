type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type SdgRelateToManyInput = {
  readonly create?: ReadonlyArray<SdgCreateInput | null> | null;
  readonly connect?: ReadonlyArray<SdgWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<SdgWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CategoryRelateToManyInput = {
  readonly create?: ReadonlyArray<CategoryCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CategoryWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CategoryWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ActionWhereInput = {
  readonly AND?: ReadonlyArray<ActionWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ActionWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly publishDate_not?: Scalars['String'] | null;
  readonly publishDate_lt?: Scalars['String'] | null;
  readonly publishDate_lte?: Scalars['String'] | null;
  readonly publishDate_gt?: Scalars['String'] | null;
  readonly publishDate_gte?: Scalars['String'] | null;
  readonly publishDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly publishDate_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly relatedSdgs_every?: SdgWhereInput | null;
  readonly relatedSdgs_some?: SdgWhereInput | null;
  readonly relatedSdgs_none?: SdgWhereInput | null;
  readonly categories_every?: CategoryWhereInput | null;
  readonly categories_some?: CategoryWhereInput | null;
  readonly categories_none?: CategoryWhereInput | null;
};

export type ActionWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortActionsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'publishDate_ASC'
  | 'publishDate_DESC'
  | 'relatedSdgs_ASC'
  | 'relatedSdgs_DESC'
  | 'categories_ASC'
  | 'categories_DESC';

export type ActionUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly image?: any | null;
  readonly content?: Scalars['JSON'] | null;
  readonly relatedSdgs?: SdgRelateToManyInput | null;
  readonly categories?: CategoryRelateToManyInput | null;
};

export type ActionsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ActionUpdateInput | null;
};

export type ActionCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly publishDate?: Scalars['String'] | null;
  readonly image?: any | null;
  readonly content?: Scalars['JSON'] | null;
  readonly relatedSdgs?: SdgRelateToManyInput | null;
  readonly categories?: CategoryRelateToManyInput | null;
};

export type ActionsCreateInput = {
  readonly data?: ActionCreateInput | null;
};

export type ActionRelateToManyInput = {
  readonly create?: ReadonlyArray<ActionCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ActionWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ActionWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CategoryWhereInput = {
  readonly AND?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly actions_every?: ActionWhereInput | null;
  readonly actions_some?: ActionWhereInput | null;
  readonly actions_none?: ActionWhereInput | null;
};

export type CategoryWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCategoriesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'actions_ASC'
  | 'actions_DESC';

export type CategoryUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly actions?: ActionRelateToManyInput | null;
};

export type CategoriesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CategoryUpdateInput | null;
};

export type CategoryCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly actions?: ActionRelateToManyInput | null;
};

export type CategoriesCreateInput = {
  readonly data?: CategoryCreateInput | null;
};

export type ActionRelateToOneInput = {
  readonly create?: ActionCreateInput | null;
  readonly connect?: ActionWhereUniqueInput | null;
  readonly disconnect?: ActionWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CompletionWhereInput = {
  readonly AND?: ReadonlyArray<CompletionWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CompletionWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly action?: ActionWhereInput | null;
  readonly action_is_null?: Scalars['Boolean'] | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly completionDate?: Scalars['String'] | null;
  readonly completionDate_not?: Scalars['String'] | null;
  readonly completionDate_lt?: Scalars['String'] | null;
  readonly completionDate_lte?: Scalars['String'] | null;
  readonly completionDate_gt?: Scalars['String'] | null;
  readonly completionDate_gte?: Scalars['String'] | null;
  readonly completionDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly completionDate_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly kudos_every?: UserWhereInput | null;
  readonly kudos_some?: UserWhereInput | null;
  readonly kudos_none?: UserWhereInput | null;
};

export type CompletionWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCompletionsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'action_ASC'
  | 'action_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'completionDate_ASC'
  | 'completionDate_DESC'
  | 'kudos_ASC'
  | 'kudos_DESC';

export type CompletionUpdateInput = {
  readonly action?: ActionRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
  readonly completionDate?: Scalars['String'] | null;
  readonly kudos?: UserRelateToManyInput | null;
};

export type CompletionsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CompletionUpdateInput | null;
};

export type CompletionCreateInput = {
  readonly action?: ActionRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
  readonly completionDate?: Scalars['String'] | null;
  readonly kudos?: UserRelateToManyInput | null;
};

export type CompletionsCreateInput = {
  readonly data?: CompletionCreateInput | null;
};

export type IdeaWhereInput = {
  readonly AND?: ReadonlyArray<IdeaWhereInput | null> | null;
  readonly OR?: ReadonlyArray<IdeaWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly body?: Scalars['String'] | null;
  readonly body_not?: Scalars['String'] | null;
  readonly body_contains?: Scalars['String'] | null;
  readonly body_not_contains?: Scalars['String'] | null;
  readonly body_starts_with?: Scalars['String'] | null;
  readonly body_not_starts_with?: Scalars['String'] | null;
  readonly body_ends_with?: Scalars['String'] | null;
  readonly body_not_ends_with?: Scalars['String'] | null;
  readonly body_i?: Scalars['String'] | null;
  readonly body_not_i?: Scalars['String'] | null;
  readonly body_contains_i?: Scalars['String'] | null;
  readonly body_not_contains_i?: Scalars['String'] | null;
  readonly body_starts_with_i?: Scalars['String'] | null;
  readonly body_not_starts_with_i?: Scalars['String'] | null;
  readonly body_ends_with_i?: Scalars['String'] | null;
  readonly body_not_ends_with_i?: Scalars['String'] | null;
  readonly body_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly body_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
};

export type IdeaWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortIdeasBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'body_ASC'
  | 'body_DESC'
  | 'user_ASC'
  | 'user_DESC';

export type IdeaUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly body?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
};

export type IdeasUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: IdeaUpdateInput | null;
};

export type IdeaCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly body?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
};

export type IdeasCreateInput = {
  readonly data?: IdeaCreateInput | null;
};

export type RoleWhereInput = {
  readonly AND?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly canEditOtherUsers?: Scalars['Boolean'] | null;
  readonly canEditOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly assignedTo_every?: UserWhereInput | null;
  readonly assignedTo_some?: UserWhereInput | null;
  readonly assignedTo_none?: UserWhereInput | null;
};

export type RoleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRolesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'canEditOtherUsers_ASC'
  | 'canEditOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'assignedTo_ASC'
  | 'assignedTo_DESC';

export type RoleUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canEditOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RoleUpdateInput | null;
};

export type RoleCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canEditOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesCreateInput = {
  readonly data?: RoleCreateInput | null;
};

export type SdgWhereInput = {
  readonly AND?: ReadonlyArray<SdgWhereInput | null> | null;
  readonly OR?: ReadonlyArray<SdgWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly sdgNo?: Scalars['Int'] | null;
  readonly sdgNo_not?: Scalars['Int'] | null;
  readonly sdgNo_lt?: Scalars['Int'] | null;
  readonly sdgNo_lte?: Scalars['Int'] | null;
  readonly sdgNo_gt?: Scalars['Int'] | null;
  readonly sdgNo_gte?: Scalars['Int'] | null;
  readonly sdgNo_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly sdgNo_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly actions_every?: ActionWhereInput | null;
  readonly actions_some?: ActionWhereInput | null;
  readonly actions_none?: ActionWhereInput | null;
};

export type SdgWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortSdgsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'sdgNo_ASC'
  | 'sdgNo_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'actions_ASC'
  | 'actions_DESC';

export type SdgUpdateInput = {
  readonly sdgNo?: Scalars['Int'] | null;
  readonly title?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly content?: Scalars['JSON'] | null;
  readonly actions?: ActionRelateToManyInput | null;
};

export type SdgsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: SdgUpdateInput | null;
};

export type SdgCreateInput = {
  readonly sdgNo?: Scalars['Int'] | null;
  readonly title?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly content?: Scalars['JSON'] | null;
  readonly actions?: ActionRelateToManyInput | null;
};

export type SdgsCreateInput = {
  readonly data?: SdgCreateInput | null;
};

export type CompletionRelateToManyInput = {
  readonly create?: ReadonlyArray<CompletionCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CompletionWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CompletionWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleRelateToOneInput = {
  readonly create?: RoleCreateInput | null;
  readonly connect?: RoleWhereUniqueInput | null;
  readonly disconnect?: RoleWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly profilePicture?: Scalars['String'] | null;
  readonly profilePicture_not?: Scalars['String'] | null;
  readonly profilePicture_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly profilePicture_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly biography?: Scalars['String'] | null;
  readonly biography_not?: Scalars['String'] | null;
  readonly biography_contains?: Scalars['String'] | null;
  readonly biography_not_contains?: Scalars['String'] | null;
  readonly biography_starts_with?: Scalars['String'] | null;
  readonly biography_not_starts_with?: Scalars['String'] | null;
  readonly biography_ends_with?: Scalars['String'] | null;
  readonly biography_not_ends_with?: Scalars['String'] | null;
  readonly biography_i?: Scalars['String'] | null;
  readonly biography_not_i?: Scalars['String'] | null;
  readonly biography_contains_i?: Scalars['String'] | null;
  readonly biography_not_contains_i?: Scalars['String'] | null;
  readonly biography_starts_with_i?: Scalars['String'] | null;
  readonly biography_not_starts_with_i?: Scalars['String'] | null;
  readonly biography_ends_with_i?: Scalars['String'] | null;
  readonly biography_not_ends_with_i?: Scalars['String'] | null;
  readonly biography_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly biography_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly areasOfInterest?: Scalars['String'] | null;
  readonly areasOfInterest_not?: Scalars['String'] | null;
  readonly areasOfInterest_contains?: Scalars['String'] | null;
  readonly areasOfInterest_not_contains?: Scalars['String'] | null;
  readonly areasOfInterest_starts_with?: Scalars['String'] | null;
  readonly areasOfInterest_not_starts_with?: Scalars['String'] | null;
  readonly areasOfInterest_ends_with?: Scalars['String'] | null;
  readonly areasOfInterest_not_ends_with?: Scalars['String'] | null;
  readonly areasOfInterest_i?: Scalars['String'] | null;
  readonly areasOfInterest_not_i?: Scalars['String'] | null;
  readonly areasOfInterest_contains_i?: Scalars['String'] | null;
  readonly areasOfInterest_not_contains_i?: Scalars['String'] | null;
  readonly areasOfInterest_starts_with_i?: Scalars['String'] | null;
  readonly areasOfInterest_not_starts_with_i?: Scalars['String'] | null;
  readonly areasOfInterest_ends_with_i?: Scalars['String'] | null;
  readonly areasOfInterest_not_ends_with_i?: Scalars['String'] | null;
  readonly areasOfInterest_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly areasOfInterest_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly funFacts?: Scalars['String'] | null;
  readonly funFacts_not?: Scalars['String'] | null;
  readonly funFacts_contains?: Scalars['String'] | null;
  readonly funFacts_not_contains?: Scalars['String'] | null;
  readonly funFacts_starts_with?: Scalars['String'] | null;
  readonly funFacts_not_starts_with?: Scalars['String'] | null;
  readonly funFacts_ends_with?: Scalars['String'] | null;
  readonly funFacts_not_ends_with?: Scalars['String'] | null;
  readonly funFacts_i?: Scalars['String'] | null;
  readonly funFacts_not_i?: Scalars['String'] | null;
  readonly funFacts_contains_i?: Scalars['String'] | null;
  readonly funFacts_not_contains_i?: Scalars['String'] | null;
  readonly funFacts_starts_with_i?: Scalars['String'] | null;
  readonly funFacts_not_starts_with_i?: Scalars['String'] | null;
  readonly funFacts_ends_with_i?: Scalars['String'] | null;
  readonly funFacts_not_ends_with_i?: Scalars['String'] | null;
  readonly funFacts_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly funFacts_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly favouriteSdgs_every?: SdgWhereInput | null;
  readonly favouriteSdgs_some?: SdgWhereInput | null;
  readonly favouriteSdgs_none?: SdgWhereInput | null;
  readonly completions_every?: CompletionWhereInput | null;
  readonly completions_some?: CompletionWhereInput | null;
  readonly completions_none?: CompletionWhereInput | null;
  readonly role?: RoleWhereInput | null;
  readonly role_is_null?: Scalars['Boolean'] | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'biography_ASC'
  | 'biography_DESC'
  | 'areasOfInterest_ASC'
  | 'areasOfInterest_DESC'
  | 'funFacts_ASC'
  | 'funFacts_DESC'
  | 'favouriteSdgs_ASC'
  | 'favouriteSdgs_DESC'
  | 'completions_ASC'
  | 'completions_DESC'
  | 'role_ASC'
  | 'role_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly profilePicture?: any | null;
  readonly biography?: Scalars['String'] | null;
  readonly areasOfInterest?: Scalars['String'] | null;
  readonly funFacts?: Scalars['String'] | null;
  readonly favouriteSdgs?: SdgRelateToManyInput | null;
  readonly completions?: CompletionRelateToManyInput | null;
  readonly role?: RoleRelateToOneInput | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly profilePicture?: any | null;
  readonly biography?: Scalars['String'] | null;
  readonly areasOfInterest?: Scalars['String'] | null;
  readonly funFacts?: Scalars['String'] | null;
  readonly favouriteSdgs?: SdgRelateToManyInput | null;
  readonly completions?: CompletionRelateToManyInput | null;
  readonly role?: RoleRelateToOneInput | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type ActionListTypeInfo = {
  key: 'Action';
  fields:
    | 'id'
    | 'title'
    | 'status'
    | 'publishDate'
    | 'image'
    | 'content'
    | 'relatedSdgs'
    | 'categories';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly status?: string | null;
    readonly publishDate?: Date | null;
    readonly image?: any;
    readonly content?: Record<string, any>[] | null;
    readonly relatedSdgs?: string | null;
    readonly categories?: string | null;
  };
  inputs: {
    where: ActionWhereInput;
    create: ActionCreateInput;
    update: ActionUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ActionWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortActionsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ActionListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ActionListTypeInfo,
    ActionListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ActionListTypeInfo,
  ActionListTypeInfo['fields']
>;

export type CategoryListTypeInfo = {
  key: 'Category';
  fields: 'id' | 'title' | 'actions';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly actions?: string | null;
  };
  inputs: {
    where: CategoryWhereInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CategoryWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCategoriesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CategoryListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CategoryListTypeInfo,
    CategoryListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CategoryListTypeInfo,
  CategoryListTypeInfo['fields']
>;

export type CompletionListTypeInfo = {
  key: 'Completion';
  fields: 'id' | 'action' | 'user' | 'completionDate' | 'kudos';
  backing: {
    readonly id: string;
    readonly action?: string | null;
    readonly user?: string | null;
    readonly completionDate?: Date | null;
    readonly kudos?: string | null;
  };
  inputs: {
    where: CompletionWhereInput;
    create: CompletionCreateInput;
    update: CompletionUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CompletionWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCompletionsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CompletionListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CompletionListTypeInfo,
    CompletionListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CompletionListTypeInfo,
  CompletionListTypeInfo['fields']
>;

export type IdeaListTypeInfo = {
  key: 'Idea';
  fields: 'id' | 'title' | 'body' | 'user';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly body?: string | null;
    readonly user?: string | null;
  };
  inputs: {
    where: IdeaWhereInput;
    create: IdeaCreateInput;
    update: IdeaUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: IdeaWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortIdeasBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type IdeaListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    IdeaListTypeInfo,
    IdeaListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  IdeaListTypeInfo,
  IdeaListTypeInfo['fields']
>;

export type RoleListTypeInfo = {
  key: 'Role';
  fields:
    | 'id'
    | 'name'
    | 'canEditOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'assignedTo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly canEditOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly assignedTo?: string | null;
  };
  inputs: {
    where: RoleWhereInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RoleWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRolesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RoleListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RoleListTypeInfo,
    RoleListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RoleListTypeInfo,
  RoleListTypeInfo['fields']
>;

export type SdgListTypeInfo = {
  key: 'Sdg';
  fields: 'id' | 'sdgNo' | 'title' | 'description' | 'content' | 'actions';
  backing: {
    readonly id: string;
    readonly sdgNo?: number | null;
    readonly title?: string | null;
    readonly description?: string | null;
    readonly content?: Record<string, any>[] | null;
    readonly actions?: string | null;
  };
  inputs: {
    where: SdgWhereInput;
    create: SdgCreateInput;
    update: SdgUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: SdgWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortSdgsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type SdgListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    SdgListTypeInfo,
    SdgListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  SdgListTypeInfo,
  SdgListTypeInfo['fields']
>;

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'profilePicture'
    | 'biography'
    | 'areasOfInterest'
    | 'funFacts'
    | 'favouriteSdgs'
    | 'completions'
    | 'role';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly profilePicture?: any;
    readonly biography?: string | null;
    readonly areasOfInterest?: string | null;
    readonly funFacts?: string | null;
    readonly favouriteSdgs?: string | null;
    readonly completions?: string | null;
    readonly role?: string | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly Action: ActionListTypeInfo;
  readonly Category: CategoryListTypeInfo;
  readonly Completion: CompletionListTypeInfo;
  readonly Idea: IdeaListTypeInfo;
  readonly Role: RoleListTypeInfo;
  readonly Sdg: SdgListTypeInfo;
  readonly User: UserListTypeInfo;
};
