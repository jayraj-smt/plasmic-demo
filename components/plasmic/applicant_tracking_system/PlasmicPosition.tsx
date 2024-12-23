// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m28RWVuqnHm6JV8qju1gwB
// Component: _5TLdy7mPPYR

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: BFAO2Ta06LZg/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import Card from "../../Card"; // plasmic-import: rsEVwFl7B2gt/component
import { RichDetails } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-details";
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: m28RWVuqnHm6JV8qju1gwB/projectcss
import sty from "./PlasmicPosition.module.css"; // plasmic-import: _5TLdy7mPPYR/css

createPlasmicElementProxy;

export type PlasmicPosition__VariantMembers = {};
export type PlasmicPosition__VariantsArgs = {};
type VariantPropType = keyof PlasmicPosition__VariantsArgs;
export const PlasmicPosition__VariantProps = new Array<VariantPropType>();

export type PlasmicPosition__ArgsType = {};
type ArgPropType = keyof PlasmicPosition__ArgsType;
export const PlasmicPosition__ArgProps = new Array<ArgPropType>();

export type PlasmicPosition__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  section?: Flex__<"section">;
  freeBox?: Flex__<"div">;
  h1?: Flex__<"h1">;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
  dataDetails?: Flex__<typeof RichDetails>;
  h4?: Flex__<"h4">;
  table?: Flex__<typeof RichTable>;
};

export interface DefaultPositionProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPosition__RenderFunc(props: {
  variants: PlasmicPosition__VariantsArgs;
  args: PlasmicPosition__ArgsType;
  overrides: PlasmicPosition__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    position: usePlasmicDataOp(() => {
      return {
        sourceId: "aUacgTjkSVJ53HpRdMWrYs",
        opId: "0a342502-e6b4-423b-a5b3-c472e1db66eb",
        userArgs: {
          filters: [$ctx.params.id]
        },
        cacheKey: `plasmic.$.0a342502-e6b4-423b-a5b3-c472e1db66eb.$.`,
        invalidatedKeys: null,
        roleId: "c4768d98-22d8-49a8-8a5d-aa1e13ad6227"
      };
    }),
    candidates: usePlasmicDataOp(() => {
      return {
        sourceId: "aUacgTjkSVJ53HpRdMWrYs",
        opId: "b6a7a6bf-209d-4603-bc33-3fad07c30fd7",
        userArgs: {
          filters: [$ctx.params.id]
        },
        cacheKey: `plasmic.$.b6a7a6bf-209d-4603-bc33-3fad07c30fd7.$.`,
        invalidatedKeys: null,
        roleId: "c4768d98-22d8-49a8-8a5d-aa1e13ad6227"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPosition.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPosition.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPosition.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
          >
            <DataCtxReader__>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return $queries.position.data[0].title;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Position title";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </h1>
                    <AntdButton
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      onClick={async () => {
                        const $steps = {};

                        $steps["tutorialdbUpdateMany"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "aUacgTjkSVJ53HpRdMWrYs",
                                  opId: "211c5c86-2086-4fdf-afd4-f404d27efbd3",
                                  userArgs: {
                                    conditions: [$ctx.params.id]
                                  },
                                  cacheKey: null,
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: "c4768d98-22d8-49a8-8a5d-aa1e13ad6227"
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["tutorialdbUpdateMany"] != null &&
                          typeof $steps["tutorialdbUpdateMany"] === "object" &&
                          typeof $steps["tutorialdbUpdateMany"].then ===
                            "function"
                        ) {
                          $steps["tutorialdbUpdateMany"] = await $steps[
                            "tutorialdbUpdateMany"
                          ];
                        }
                      }}
                    >
                      <div
                        data-plasmic-name={"text"}
                        data-plasmic-override={overrides.text}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text
                        )}
                      >
                        {"Archive"}
                      </div>
                    </AntdButton>
                  </div>
                  <Card
                    className={classNames("__wab_instance", sty.card__uBBp)}
                    noTitle={true}
                  >
                    <RichDetails
                      data-plasmic-name={"dataDetails"}
                      data-plasmic-override={overrides.dataDetails}
                      bordered={true}
                      className={classNames("__wab_instance", sty.dataDetails)}
                      column={1}
                      data={(() => {
                        try {
                          return $queries.position;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                      fields={(() => {
                        const __composite = [
                          { key: "dept", fieldId: "dept" },
                          { key: "id", fieldId: "id", isHidden: null },
                          { key: "title", fieldId: "title", isHidden: null },
                          { key: "description", fieldId: "description" },
                          {
                            key: "department_id",
                            fieldId: "department_id",
                            isHidden: null
                          },
                          { key: "archived", fieldId: "archived" },
                          { key: "created_at", fieldId: "created_at" }
                        ];
                        __composite["1"]["isHidden"] = true;
                        __composite["2"]["isHidden"] = true;
                        __composite["4"]["isHidden"] = true;
                        return __composite;
                      })()}
                    />
                  </Card>
                  <Card
                    className={classNames("__wab_instance", sty.card__hj9Sc)}
                    title={
                      <h4
                        data-plasmic-name={"h4"}
                        data-plasmic-override={overrides.h4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4
                        )}
                      >
                        {"Candidates"}
                      </h4>
                    }
                  >
                    {(() => {
                      const child$Props = {
                        className: classNames("__wab_instance", sty.table),
                        data: (() => {
                          try {
                            return $queries.candidates;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })(),
                        fields: (() => {
                          const __composite = [
                            { key: "id", fieldId: "id", isHidden: null },
                            { key: "name", fieldId: "name" },
                            { key: "email", fieldId: "email" },
                            { key: "phone", fieldId: "phone" },
                            {
                              key: "position_id",
                              fieldId: "position_id",
                              isHidden: null
                            },
                            { key: "resume_url", fieldId: "resume_url" },
                            { key: "notes", fieldId: "notes" },
                            { key: "status", fieldId: "status" },
                            { key: "created_at", fieldId: "created_at" }
                          ];
                          __composite["0"]["isHidden"] = true;
                          __composite["4"]["isHidden"] = true;
                          return __composite;
                        })(),

                        onRowSelectionChanged: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRowKey",
                            ["table", "selectedRowKey"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRow",
                            ["table", "selectedRow"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRows",
                            ["table", "selectedRows"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRowKeys",
                            ["table", "selectedRowKeys"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                        },
                        scopeClassName: sty["table__instance"],
                        selectedRowKey: generateStateValueProp($state, [
                          "table",
                          "selectedRowKey"
                        ]),
                        selectedRowKeys: generateStateValueProp($state, [
                          "table",
                          "selectedRowKeys"
                        ]),
                        themeResetClassName: classNames(
                          projectcss.root_reset,
                          projectcss.root_reset_tags,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens,
                          plasmic_plasmic_rich_components_css.plasmic_tokens
                        )
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "selectedRowKey",
                            plasmicStateName: "table.selectedRowKey"
                          },
                          {
                            name: "selectedRow",
                            plasmicStateName: "table.selectedRow"
                          },
                          {
                            name: "selectedRows",
                            plasmicStateName: "table.selectedRows"
                          },
                          {
                            name: "selectedRowKeys",
                            plasmicStateName: "table.selectedRowKeys"
                          }
                        ],
                        [],
                        RichTable_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <RichTable
                          data-plasmic-name={"table"}
                          data-plasmic-override={overrides.table}
                          {...child$Props}
                        />
                      );
                    })()}
                  </Card>
                </section>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageLayout",
    "section",
    "freeBox",
    "h1",
    "button",
    "text",
    "dataDetails",
    "h4",
    "table"
  ],
  pageLayout: [
    "pageLayout",
    "section",
    "freeBox",
    "h1",
    "button",
    "text",
    "dataDetails",
    "h4",
    "table"
  ],
  section: [
    "section",
    "freeBox",
    "h1",
    "button",
    "text",
    "dataDetails",
    "h4",
    "table"
  ],
  freeBox: ["freeBox", "h1", "button", "text"],
  h1: ["h1"],
  button: ["button", "text"],
  text: ["text"],
  dataDetails: ["dataDetails"],
  h4: ["h4"],
  table: ["table"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  section: "section";
  freeBox: "div";
  h1: "h1";
  button: typeof AntdButton;
  text: "div";
  dataDetails: typeof RichDetails;
  h4: "h4";
  table: typeof RichTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPosition__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPosition__VariantsArgs;
    args?: PlasmicPosition__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPosition__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPosition__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPosition__ArgProps,
          internalVariantPropNames: PlasmicPosition__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPosition__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPosition";
  } else {
    func.displayName = `PlasmicPosition.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"c4768d98-22d8-49a8-8a5d-aa1e13ad6227"}
      appId={"m28RWVuqnHm6JV8qju1gwB"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "m28RWVuqnHm6JV8qju1gwB"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicPosition = Object.assign(
  // Top-level PlasmicPosition renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    dataDetails: makeNodeComponent("dataDetails"),
    h4: makeNodeComponent("h4"),
    table: makeNodeComponent("table"),

    // Metadata about props expected for PlasmicPosition
    internalVariantProps: PlasmicPosition__VariantProps,
    internalArgProps: PlasmicPosition__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Position",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPosition;
/* prettier-ignore-end */
