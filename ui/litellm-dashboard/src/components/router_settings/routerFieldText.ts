import type { TFunction } from "i18next";

interface RouterFieldMetadata {
  ui_field_name?: string;
  field_description?: string;
}

const BACKEND_FIELD_KEYS = {
  routing_strategy: "routingStrategy",
  enable_tag_filtering: "enableTagFiltering",
  allowed_fails: "allowedFails",
  cooldown_time: "cooldownTime",
  num_retries: "numRetries",
  timeout: "timeout",
  retry_after: "retryAfter",
  model_group_alias: "modelGroupAlias",
  enable_weighted_failover: "enableWeightedFailover",
  enable_mid_stream_fallback_continuation: "enableMidStreamFallbackContinuation",
  tag_routing_prefix: "tagRoutingPrefix",
  fallback_on_unsupported_params: "fallbackOnUnsupportedParams",
} as const;

const STRATEGY_KEYS = {
  "simple-shuffle": "simpleShuffle",
  "least-busy": "leastBusy",
  "usage-based-routing": "usageBased",
  "usage-based-routing-v2": "usageBased",
  "latency-based-routing": "latencyBased",
  priority: "priority",
} as const;

const DEFAULT_LABELS: Record<string, string> = {
  routing_strategy: "Routing Strategy",
  enable_tag_filtering: "Enable Tag Filtering",
  allowed_fails: "Allowed Fails",
  cooldown_time: "Cooldown Time",
  num_retries: "Number of Retries",
  timeout: "Timeout",
  retry_after: "Retry After",
  model_group_alias: "Model Group Alias",
  enable_weighted_failover: "Enable Weighted Failover",
  enable_mid_stream_fallback_continuation: "Enable Mid-Stream Fallback Continuation",
  tag_routing_prefix: "Tag Routing Prefix",
  fallback_on_unsupported_params: "Fallback on Unsupported Params",
};

const DEFAULT_DESCRIPTIONS: Record<string, string> = {
  routing_strategy: "Routing algorithm to use for load balancing across deployments",
  enable_tag_filtering: "Route requests based on tags",
  allowed_fails: "Number of times a deployment can fail before being added to cooldown",
  cooldown_time: "Time in seconds to cooldown a deployment after failure",
  num_retries: "Number of retries for failed requests",
  timeout: "Timeout for requests in seconds",
  retry_after: "Minimum time to wait before retrying a failed request in seconds",
  model_group_alias: "Aliases for model groups",
  enable_weighted_failover: "Fail over between deployments according to their weights",
  enable_mid_stream_fallback_continuation: "Continue fallback when a streaming response fails mid-stream",
  tag_routing_prefix: "Request tag prefix used for tag routing",
  fallback_on_unsupported_params: "Allow switching to another deployment when parameters are unsupported",
};

export function routerFieldLabel(fieldName: string, metadata: RouterFieldMetadata | undefined, t: TFunction): string {
  if (metadata?.ui_field_name && metadata.ui_field_name.toLowerCase() !== DEFAULT_LABELS[fieldName]?.toLowerCase()) {
    return metadata.ui_field_name;
  }
  const key = BACKEND_FIELD_KEYS[fieldName as keyof typeof BACKEND_FIELD_KEYS];
  if (key) {
    return t(`routerSettings.backendFields.${key}.label` as const);
  }
  return metadata?.ui_field_name || fieldName.replace(/_/g, " ");
}

export function routerFieldDescription(
  fieldName: string,
  metadata: RouterFieldMetadata | undefined,
  t: TFunction,
): string {
  if (
    metadata?.field_description &&
    metadata.field_description.toLowerCase() !== DEFAULT_DESCRIPTIONS[fieldName]?.toLowerCase()
  ) {
    return metadata.field_description;
  }
  const key = BACKEND_FIELD_KEYS[fieldName as keyof typeof BACKEND_FIELD_KEYS];
  if (key) {
    return t(`routerSettings.backendFields.${key}.description` as const);
  }
  return metadata?.field_description || "";
}

export function routingStrategyDescription(
  strategy: string,
  backendDescription: string | undefined,
  t: TFunction,
): string {
  const key = STRATEGY_KEYS[strategy as keyof typeof STRATEGY_KEYS];
  return key ? t(`routerSettings.routingStrategy.descriptions.${key}` as const) : backendDescription || "";
}
