// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eu24FAT4D3bmHZBPj1vYEJ
// Component: o4nuhCDMcbL3

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

import PageLayout from "../../PageLayout"; // plasmic-import: 5ighk7jYQzqD/component
import DateTimeRangePicker from "../../DateTimeRangePicker"; // plasmic-import: mYEwzWBGQ0ut/component
import { AntdDatePicker } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import { datePickerHelpers as AntdDatePicker_Helpers } from "@plasmicpkgs/antd5/skinny/registerDatePicker";
import Statistic from "../../Statistic"; // plasmic-import: VG3vpETjevRP/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantszonaJVbTLlFx } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ZonaJVbTLlFx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eu24FAT4D3bmHZBPj1vYEJ/projectcss
import sty from "./PlasmicProduct.module.css"; // plasmic-import: o4nuhCDMcbL3/css

createPlasmicElementProxy;

export type PlasmicProduct__VariantMembers = {};
export type PlasmicProduct__VariantsArgs = {};
type VariantPropType = keyof PlasmicProduct__VariantsArgs;
export const PlasmicProduct__VariantProps = new Array<VariantPropType>();

export type PlasmicProduct__ArgsType = {};
type ArgPropType = keyof PlasmicProduct__ArgsType;
export const PlasmicProduct__ArgProps = new Array<ArgPropType>();

export type PlasmicProduct__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  h1?: Flex__<"h1">;
  dateTimeRangePicker?: Flex__<typeof DateTimeRangePicker>;
  table?: Flex__<typeof RichTable>;
};

export interface DefaultProductProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProduct__RenderFunc(props: {
  variants: PlasmicProduct__VariantsArgs;
  args: PlasmicProduct__ArgsType;
  overrides: PlasmicProduct__OverridesType;
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
      },
      {
        path: "start.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
      },
      {
        path: "end.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdDatePicker_Helpers)
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

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    revenueByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "EcCrkzL5cLeqohrSSv1fj",
        opId: "cb0e6d46-9701-4ff8-8888-8918c884bb14",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.cb0e6d46-9701-4ff8-8888-8918c884bb14.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    topProductsByQuantityLastYear: usePlasmicDataOp(() => {
      return {
        sourceId: "EcCrkzL5cLeqohrSSv1fj",
        opId: "f4621e05-a5e8-403f-a8ff-2603f012de89",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.f4621e05-a5e8-403f-a8ff-2603f012de89.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    totalProductCountByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "EcCrkzL5cLeqohrSSv1fj",
        opId: "9fa563bd-070a-4bae-b388-66611ab57a4e",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.9fa563bd-070a-4bae-b388-66611ab57a4e.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    unitsSoldByDateRange: usePlasmicDataOp(() => {
      return {
        sourceId: "EcCrkzL5cLeqohrSSv1fj",
        opId: "49a20d14-d2e5-4f37-819f-897001921ccd",
        userArgs: {
          query: [$state.start.value, $state.end.value]
        },
        cacheKey: `plasmic.$.49a20d14-d2e5-4f37-819f-897001921ccd.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    listAllProductNames: usePlasmicDataOp(() => {
      return {
        sourceId: "EcCrkzL5cLeqohrSSv1fj",
        opId: "816be2a3-ef3b-456d-9311-588e5e8b7888",
        userArgs: {},
        cacheKey: `plasmic.$.816be2a3-ef3b-456d-9311-588e5e8b7888.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantszonaJVbTLlFx()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicProduct.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicProduct.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicProduct.pageMetadata.title}
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
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
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
                    {"Product Metrics"}
                  </h1>
                  <section
                    className={classNames(projectcss.all, sty.section__yk6N0)}
                  >
                    <DateTimeRangePicker
                      data-plasmic-name={"dateTimeRangePicker"}
                      data-plasmic-override={overrides.dateTimeRangePicker}
                      className={classNames(
                        "__wab_instance",
                        sty.dateTimeRangePicker
                      )}
                    />

                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___9S00C
                      )}
                    >
                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__zySUp
                        )}
                        hideTrendTracker={true}
                        number={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__twPa
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.h2__volbd
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return $queries
                                          .totalProductCountByDateRange.data[0]
                                          .product_count;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "NULL";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__pTeDp
                            )}
                          >
                            <p
                              className={classNames(
                                projectcss.all,
                                projectcss.p,
                                projectcss.__wab_text,
                                sty.p__ymJj9
                              )}
                            >
                              {"Product inventory"}
                            </p>
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img___02FqN)}
                              displayHeight={"auto"}
                              displayMaxHeight={"28px"}
                              displayMaxWidth={"28px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/orderIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />

                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic__lwf45
                        )}
                        hideTrendTracker={true}
                        number={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___9Fsk
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.h2__oYtIv
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return Intl.NumberFormat("en").format(
                                          $queries.unitsSoldByDateRange.data[0]
                                            .products_sold
                                        );
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "NULL";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__fpOqG
                            )}
                          >
                            <p
                              className={classNames(
                                projectcss.all,
                                projectcss.p,
                                projectcss.__wab_text,
                                sty.p__azUSt
                              )}
                            >
                              {"Units sold"}
                            </p>
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img__zjZaq)}
                              displayHeight={"auto"}
                              displayMaxHeight={"28px"}
                              displayMaxWidth={"28px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/cartIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />

                      <Statistic
                        className={classNames(
                          "__wab_instance",
                          sty.statistic___8Ezw
                        )}
                        hideTrendTracker={true}
                        number={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__bbtPp
                            )}
                          >
                            <React.Fragment>
                              <React.Fragment>{""}</React.Fragment>
                              {
                                <h2
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h2,
                                    projectcss.__wab_text,
                                    sty.h2___7052Q
                                  )}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return (
                                          "$" +
                                          Intl.NumberFormat("en").format(
                                            $queries.revenueByDateRange.data[0]
                                              .total_revenue
                                          )
                                        );
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "NULL";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </h2>
                              }
                              <React.Fragment>{""}</React.Fragment>
                            </React.Fragment>
                          </div>
                        }
                        unit={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__iXagN
                            )}
                          >
                            <p
                              className={classNames(
                                projectcss.all,
                                projectcss.p,
                                projectcss.__wab_text,
                                sty.p__ueNvq
                              )}
                            >
                              {"Total revenue"}
                            </p>
                            <PlasmicImg__
                              alt={""}
                              className={classNames(sty.img__eZ7C5)}
                              displayHeight={"auto"}
                              displayMaxHeight={"28px"}
                              displayMaxWidth={"28px"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              loading={"lazy"}
                              src={{
                                src: "/plasmic/dashboard/images/dollarIcon.svg",
                                fullWidth: 150,
                                fullHeight: 150,
                                aspectRatio: 1
                              }}
                            />
                          </div>
                        }
                      />
                    </Stack__>
                  </section>
                  <section
                    className={classNames(projectcss.all, sty.section__vruyb)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__y6Cpw)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__gqaR
                        )}
                      >
                        {"Top selling products"}
                      </h2>
                      {(() => {
                        const child$Props = {
                          className: classNames("__wab_instance", sty.table),
                          data: (() => {
                            try {
                              return $queries.topProductsByQuantityLastYear;
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
                          defaultSize: "large",
                          fields: (() => {
                            const __composite = [
                              {
                                key: "product_id",
                                fieldId: "product_id",
                                isHidden: null
                              },
                              {
                                key: "product_name",
                                fieldId: "product_name",
                                title: null
                              },
                              {
                                key: "total_quantity_sold",
                                fieldId: "total_quantity_sold",
                                title: null
                              }
                            ];
                            __composite["0"]["isHidden"] = true;
                            __composite["1"]["title"] = "Product";
                            __composite["2"]["title"] = "Quantity sold";
                            return __composite;
                          })(),

                          hideDensity: true,
                          hideExports: false,
                          hideSearch: false,
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
                    </div>
                  </section>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "h1", "dateTimeRangePicker", "table"],
  pageLayout: ["pageLayout", "h1", "dateTimeRangePicker", "table"],
  h1: ["h1"],
  dateTimeRangePicker: ["dateTimeRangePicker"],
  table: ["table"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  h1: "h1";
  dateTimeRangePicker: typeof DateTimeRangePicker;
  table: typeof RichTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProduct__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProduct__VariantsArgs;
    args?: PlasmicProduct__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProduct__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProduct__ArgsType,
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
          internalArgPropNames: PlasmicProduct__ArgProps,
          internalVariantPropNames: PlasmicProduct__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProduct__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProduct";
  } else {
    func.displayName = `PlasmicProduct.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "eu24FAT4D3bmHZBPj1vYEJ"
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

export const PlasmicProduct = Object.assign(
  // Top-level PlasmicProduct renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    h1: makeNodeComponent("h1"),
    dateTimeRangePicker: makeNodeComponent("dateTimeRangePicker"),
    table: makeNodeComponent("table"),

    // Metadata about props expected for PlasmicProduct
    internalVariantProps: PlasmicProduct__VariantProps,
    internalArgProps: PlasmicProduct__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Product",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProduct;
/* prettier-ignore-end */
