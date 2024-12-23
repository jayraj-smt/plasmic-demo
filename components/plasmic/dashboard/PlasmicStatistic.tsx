// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eu24FAT4D3bmHZBPj1vYEJ
// Component: VG3vpETjevRP

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: eu24FAT4D3bmHZBPj1vYEJ/projectcss
import sty from "./PlasmicStatistic.module.css"; // plasmic-import: VG3vpETjevRP/css

createPlasmicElementProxy;

export type PlasmicStatistic__VariantMembers = {
  hideIcon: "hideIcon";
  hideTrendTracker: "hideTrendTracker";
};
export type PlasmicStatistic__VariantsArgs = {
  hideIcon?: SingleBooleanChoiceArg<"hideIcon">;
  hideTrendTracker?: SingleBooleanChoiceArg<"hideTrendTracker">;
};
type VariantPropType = keyof PlasmicStatistic__VariantsArgs;
export const PlasmicStatistic__VariantProps = new Array<VariantPropType>(
  "hideIcon",
  "hideTrendTracker"
);

export type PlasmicStatistic__ArgsType = {
  unit?: React.ReactNode;
  number?: React.ReactNode;
  timeRange?: React.ReactNode;
  numberTrend?: React.ReactNode;
};
type ArgPropType = keyof PlasmicStatistic__ArgsType;
export const PlasmicStatistic__ArgProps = new Array<ArgPropType>(
  "unit",
  "number",
  "timeRange",
  "numberTrend"
);

export type PlasmicStatistic__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultStatisticProps {
  unit?: React.ReactNode;
  number?: React.ReactNode;
  timeRange?: React.ReactNode;
  numberTrend?: React.ReactNode;
  hideIcon?: SingleBooleanChoiceArg<"hideIcon">;
  hideTrendTracker?: SingleBooleanChoiceArg<"hideTrendTracker">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStatistic__RenderFunc(props: {
  variants: PlasmicStatistic__VariantsArgs;
  args: PlasmicStatistic__ArgsType;
  overrides: PlasmicStatistic__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "hideIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideIcon
      },
      {
        path: "hideTrendTracker",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.hideTrendTracker
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
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
        sty.root,
        {
          [sty.roothideIcon]: hasVariant($state, "hideIcon", "hideIcon"),
          [sty.roothideTrendTracker]: hasVariant(
            $state,
            "hideTrendTracker",
            "hideTrendTracker"
          )
        }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <div className={classNames(projectcss.all, sty.freeBox__j60Jt)}>
            <p
              className={classNames(
                projectcss.all,
                projectcss.p,
                projectcss.__wab_text,
                sty.p__wJnNs
              )}
            >
              {"Active Users"}
            </p>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__tjfFs, {
                [sty.imghideIcon__tjfFsbyVpc]: hasVariant(
                  $state,
                  "hideIcon",
                  "hideIcon"
                )
              })}
              displayHeight={"auto"}
              displayMaxHeight={"28px"}
              displayMaxWidth={"28px"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
            />
          </div>
        ),
        value: args.unit,
        className: classNames(sty.slotTargetUnit)
      })}
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__k3O8U)}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__vf2IX, {
            [sty.freeBoxhideIcon__vf2IXbyVpc]: hasVariant(
              $state,
              "hideIcon",
              "hideIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__thZ4Q
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
                        sty.h2__sZuYx
                      )}
                    >
                      {"NULL"}
                    </h2>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            ),
            value: args.number
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__qLGbx)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__teWdd, {
              [sty.freeBoxhideTrendTracker__teWddnhxPj]: hasVariant(
                $state,
                "hideTrendTracker",
                "hideTrendTracker"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__ogOmh, {
                [sty.freeBoxhideTrendTracker__ogOmHnhxPj]: hasVariant(
                  $state,
                  "hideTrendTracker",
                  "hideTrendTracker"
                )
              })}
            >
              <div className={classNames(projectcss.all, sty.freeBox___6Vu4C)}>
                {renderPlasmicSlot({
                  defaultContents: "NULL",
                  value: args.numberTrend,
                  className: classNames(sty.slotTargetNumberTrend)
                })}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__omIcE)}>
              <div className={classNames(projectcss.all, sty.freeBox__x2JWw)}>
                {renderPlasmicSlot({
                  defaultContents: "from last month",
                  value: args.timeRange,
                  className: classNames(sty.slotTargetTimeRange)
                })}
              </div>
            </div>
          </Stack__>
        </div>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStatistic__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStatistic__VariantsArgs;
    args?: PlasmicStatistic__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStatistic__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStatistic__ArgsType,
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
          internalArgPropNames: PlasmicStatistic__ArgProps,
          internalVariantPropNames: PlasmicStatistic__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStatistic__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStatistic";
  } else {
    func.displayName = `PlasmicStatistic.${nodeName}`;
  }
  return func;
}

export const PlasmicStatistic = Object.assign(
  // Top-level PlasmicStatistic renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicStatistic
    internalVariantProps: PlasmicStatistic__VariantProps,
    internalArgProps: PlasmicStatistic__ArgProps
  }
);

export default PlasmicStatistic;
/* prettier-ignore-end */
