# coding=utf-8
# *** WARNING: this file was generated by pulumi-gen-eks. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities
from .cluster import Cluster

__all__ = ['AddonArgs', 'Addon']

@pulumi.input_type
class AddonArgs:
    def __init__(__self__, *,
                 addon_name: pulumi.Input[str],
                 cluster: pulumi.Input['Cluster'],
                 addon_version: Optional[pulumi.Input[str]] = None,
                 configuration_values: Optional[pulumi.Input[str]] = None,
                 preserve: Optional[pulumi.Input[bool]] = None,
                 resolve_conflicts_on_create: Optional[pulumi.Input[str]] = None,
                 resolve_conflicts_on_update: Optional[pulumi.Input[str]] = None,
                 service_account_role_arn: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Sequence[pulumi.Input[Mapping[str, pulumi.Input[str]]]]]] = None):
        """
        The set of arguments for constructing a Addon resource.
        :param pulumi.Input[str] addon_name: Name of the EKS add-on. The name must match one of the names returned by describe-addon-versions.
        :param pulumi.Input['Cluster'] cluster: The target EKS cluster.
        :param pulumi.Input[str] addon_version: The version of the EKS add-on. The version must match one of the versions returned by describe-addon-versions.
        :param pulumi.Input[str] configuration_values: Custom configuration values for addons with single JSON string. This JSON string value must match the JSON schema derived from describe-addon-configuration.
        :param pulumi.Input[bool] preserve: Indicates if you want to preserve the created resources when deleting the EKS add-on.
        :param pulumi.Input[str] resolve_conflicts_on_create: How to resolve field value conflicts when migrating a self-managed add-on to an Amazon EKS add-on. Valid values are NONE and OVERWRITE. For more details see the CreateAddon API Docs.
        :param pulumi.Input[str] resolve_conflicts_on_update: How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Valid values are NONE, OVERWRITE, and PRESERVE. For more details see the UpdateAddon API Docs.
        :param pulumi.Input[str] service_account_role_arn: The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.
               
               						Note: To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide.
        :param pulumi.Input[Sequence[pulumi.Input[Mapping[str, pulumi.Input[str]]]]] tags: Key-value map of resource tags. If configured with a provider default_tags configuration block present, tags with matching keys will overwrite those defined at the provider-level.
        """
        pulumi.set(__self__, "addon_name", addon_name)
        pulumi.set(__self__, "cluster", cluster)
        if addon_version is not None:
            pulumi.set(__self__, "addon_version", addon_version)
        if configuration_values is not None:
            pulumi.set(__self__, "configuration_values", configuration_values)
        if preserve is not None:
            pulumi.set(__self__, "preserve", preserve)
        if resolve_conflicts_on_create is not None:
            pulumi.set(__self__, "resolve_conflicts_on_create", resolve_conflicts_on_create)
        if resolve_conflicts_on_update is not None:
            pulumi.set(__self__, "resolve_conflicts_on_update", resolve_conflicts_on_update)
        if service_account_role_arn is not None:
            pulumi.set(__self__, "service_account_role_arn", service_account_role_arn)
        if tags is not None:
            pulumi.set(__self__, "tags", tags)

    @property
    @pulumi.getter(name="addonName")
    def addon_name(self) -> pulumi.Input[str]:
        """
        Name of the EKS add-on. The name must match one of the names returned by describe-addon-versions.
        """
        return pulumi.get(self, "addon_name")

    @addon_name.setter
    def addon_name(self, value: pulumi.Input[str]):
        pulumi.set(self, "addon_name", value)

    @property
    @pulumi.getter
    def cluster(self) -> pulumi.Input['Cluster']:
        """
        The target EKS cluster.
        """
        return pulumi.get(self, "cluster")

    @cluster.setter
    def cluster(self, value: pulumi.Input['Cluster']):
        pulumi.set(self, "cluster", value)

    @property
    @pulumi.getter(name="addonVersion")
    def addon_version(self) -> Optional[pulumi.Input[str]]:
        """
        The version of the EKS add-on. The version must match one of the versions returned by describe-addon-versions.
        """
        return pulumi.get(self, "addon_version")

    @addon_version.setter
    def addon_version(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "addon_version", value)

    @property
    @pulumi.getter(name="configurationValues")
    def configuration_values(self) -> Optional[pulumi.Input[str]]:
        """
        Custom configuration values for addons with single JSON string. This JSON string value must match the JSON schema derived from describe-addon-configuration.
        """
        return pulumi.get(self, "configuration_values")

    @configuration_values.setter
    def configuration_values(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "configuration_values", value)

    @property
    @pulumi.getter
    def preserve(self) -> Optional[pulumi.Input[bool]]:
        """
        Indicates if you want to preserve the created resources when deleting the EKS add-on.
        """
        return pulumi.get(self, "preserve")

    @preserve.setter
    def preserve(self, value: Optional[pulumi.Input[bool]]):
        pulumi.set(self, "preserve", value)

    @property
    @pulumi.getter(name="resolveConflictsOnCreate")
    def resolve_conflicts_on_create(self) -> Optional[pulumi.Input[str]]:
        """
        How to resolve field value conflicts when migrating a self-managed add-on to an Amazon EKS add-on. Valid values are NONE and OVERWRITE. For more details see the CreateAddon API Docs.
        """
        return pulumi.get(self, "resolve_conflicts_on_create")

    @resolve_conflicts_on_create.setter
    def resolve_conflicts_on_create(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resolve_conflicts_on_create", value)

    @property
    @pulumi.getter(name="resolveConflictsOnUpdate")
    def resolve_conflicts_on_update(self) -> Optional[pulumi.Input[str]]:
        """
        How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Valid values are NONE, OVERWRITE, and PRESERVE. For more details see the UpdateAddon API Docs.
        """
        return pulumi.get(self, "resolve_conflicts_on_update")

    @resolve_conflicts_on_update.setter
    def resolve_conflicts_on_update(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "resolve_conflicts_on_update", value)

    @property
    @pulumi.getter(name="serviceAccountRoleArn")
    def service_account_role_arn(self) -> Optional[pulumi.Input[str]]:
        """
        The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.

        						Note: To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide.
        """
        return pulumi.get(self, "service_account_role_arn")

    @service_account_role_arn.setter
    def service_account_role_arn(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "service_account_role_arn", value)

    @property
    @pulumi.getter
    def tags(self) -> Optional[pulumi.Input[Sequence[pulumi.Input[Mapping[str, pulumi.Input[str]]]]]]:
        """
        Key-value map of resource tags. If configured with a provider default_tags configuration block present, tags with matching keys will overwrite those defined at the provider-level.
        """
        return pulumi.get(self, "tags")

    @tags.setter
    def tags(self, value: Optional[pulumi.Input[Sequence[pulumi.Input[Mapping[str, pulumi.Input[str]]]]]]):
        pulumi.set(self, "tags", value)


class Addon(pulumi.ComponentResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 addon_name: Optional[pulumi.Input[str]] = None,
                 addon_version: Optional[pulumi.Input[str]] = None,
                 cluster: Optional[pulumi.Input['Cluster']] = None,
                 configuration_values: Optional[pulumi.Input[str]] = None,
                 preserve: Optional[pulumi.Input[bool]] = None,
                 resolve_conflicts_on_create: Optional[pulumi.Input[str]] = None,
                 resolve_conflicts_on_update: Optional[pulumi.Input[str]] = None,
                 service_account_role_arn: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Sequence[pulumi.Input[Mapping[str, pulumi.Input[str]]]]]] = None,
                 __props__=None):
        """
        Addon manages an EKS add-on.
        For more information about supported add-ons, see: https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] addon_name: Name of the EKS add-on. The name must match one of the names returned by describe-addon-versions.
        :param pulumi.Input[str] addon_version: The version of the EKS add-on. The version must match one of the versions returned by describe-addon-versions.
        :param pulumi.Input['Cluster'] cluster: The target EKS cluster.
        :param pulumi.Input[str] configuration_values: Custom configuration values for addons with single JSON string. This JSON string value must match the JSON schema derived from describe-addon-configuration.
        :param pulumi.Input[bool] preserve: Indicates if you want to preserve the created resources when deleting the EKS add-on.
        :param pulumi.Input[str] resolve_conflicts_on_create: How to resolve field value conflicts when migrating a self-managed add-on to an Amazon EKS add-on. Valid values are NONE and OVERWRITE. For more details see the CreateAddon API Docs.
        :param pulumi.Input[str] resolve_conflicts_on_update: How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Valid values are NONE, OVERWRITE, and PRESERVE. For more details see the UpdateAddon API Docs.
        :param pulumi.Input[str] service_account_role_arn: The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see Amazon EKS node IAM role in the Amazon EKS User Guide.
               
               						Note: To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see Enabling IAM roles for service accounts on your cluster in the Amazon EKS User Guide.
        :param pulumi.Input[Sequence[pulumi.Input[Mapping[str, pulumi.Input[str]]]]] tags: Key-value map of resource tags. If configured with a provider default_tags configuration block present, tags with matching keys will overwrite those defined at the provider-level.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: AddonArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Addon manages an EKS add-on.
        For more information about supported add-ons, see: https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html

        :param str resource_name: The name of the resource.
        :param AddonArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(AddonArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 addon_name: Optional[pulumi.Input[str]] = None,
                 addon_version: Optional[pulumi.Input[str]] = None,
                 cluster: Optional[pulumi.Input['Cluster']] = None,
                 configuration_values: Optional[pulumi.Input[str]] = None,
                 preserve: Optional[pulumi.Input[bool]] = None,
                 resolve_conflicts_on_create: Optional[pulumi.Input[str]] = None,
                 resolve_conflicts_on_update: Optional[pulumi.Input[str]] = None,
                 service_account_role_arn: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Sequence[pulumi.Input[Mapping[str, pulumi.Input[str]]]]]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is not None:
            raise ValueError('ComponentResource classes do not support opts.id')
        else:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = AddonArgs.__new__(AddonArgs)

            if addon_name is None and not opts.urn:
                raise TypeError("Missing required property 'addon_name'")
            __props__.__dict__["addon_name"] = addon_name
            __props__.__dict__["addon_version"] = addon_version
            if cluster is None and not opts.urn:
                raise TypeError("Missing required property 'cluster'")
            __props__.__dict__["cluster"] = cluster
            __props__.__dict__["configuration_values"] = configuration_values
            __props__.__dict__["preserve"] = preserve
            __props__.__dict__["resolve_conflicts_on_create"] = resolve_conflicts_on_create
            __props__.__dict__["resolve_conflicts_on_update"] = resolve_conflicts_on_update
            __props__.__dict__["service_account_role_arn"] = service_account_role_arn
            __props__.__dict__["tags"] = tags
        super(Addon, __self__).__init__(
            'eks:index:Addon',
            resource_name,
            __props__,
            opts,
            remote=True)

