// *** WARNING: this file was generated by pulumi-gen-eks. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as enums from "./types/enums";
import * as utilities from "./utilities";

import * as pulumiAws from "@pulumi/aws";
import * as pulumiKubernetes from "@pulumi/kubernetes";

import {Cluster, VpcCniAddon} from "./index";

/**
 * NodeGroup is a component that wraps the AWS EC2 instances that provide compute capacity for an EKS cluster.
 */
export class NodeGroupV2 extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'eks:index:NodeGroupV2';

    /**
     * Returns true if the given object is an instance of NodeGroupV2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NodeGroupV2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NodeGroupV2.__pulumiType;
    }

    /**
     * The AutoScalingGroup for the Node group.
     */
    public /*out*/ readonly autoScalingGroup!: pulumi.Output<pulumiAws.autoscaling.Group>;
    /**
     * The additional security groups for the node group that captures user-specific rules.
     */
    public readonly extraNodeSecurityGroups!: pulumi.Output<pulumiAws.ec2.SecurityGroup[]>;
    /**
     * The security group for the node group to communicate with the cluster, or undefined if using `nodeSecurityGroupId`.
     */
    public readonly nodeSecurityGroup!: pulumi.Output<pulumiAws.ec2.SecurityGroup | undefined>;
    /**
     * The ID of the security group for the node group to communicate with the cluster.
     */
    public readonly nodeSecurityGroupId!: pulumi.Output<string>;

    /**
     * Create a NodeGroupV2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NodeGroupV2Args, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.cluster === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cluster'");
            }
            resourceInputs["amiId"] = args ? args.amiId : undefined;
            resourceInputs["amiType"] = args ? args.amiType : undefined;
            resourceInputs["autoScalingGroupTags"] = args ? args.autoScalingGroupTags : undefined;
            resourceInputs["bootstrapExtraArgs"] = args ? args.bootstrapExtraArgs : undefined;
            resourceInputs["bottlerocketSettings"] = args ? args.bottlerocketSettings : undefined;
            resourceInputs["cloudFormationTags"] = args ? args.cloudFormationTags : undefined;
            resourceInputs["cluster"] = args ? args.cluster : undefined;
            resourceInputs["clusterIngressRule"] = args ? args.clusterIngressRule : undefined;
            resourceInputs["clusterIngressRuleId"] = args ? args.clusterIngressRuleId : undefined;
            resourceInputs["desiredCapacity"] = args ? args.desiredCapacity : undefined;
            resourceInputs["enableDetailedMonitoring"] = args ? args.enableDetailedMonitoring : undefined;
            resourceInputs["encryptRootBlockDevice"] = args ? args.encryptRootBlockDevice : undefined;
            resourceInputs["extraNodeSecurityGroups"] = args ? args.extraNodeSecurityGroups : undefined;
            resourceInputs["gpu"] = args ? args.gpu : undefined;
            resourceInputs["ignoreScalingChanges"] = args ? args.ignoreScalingChanges : undefined;
            resourceInputs["instanceProfile"] = args ? args.instanceProfile : undefined;
            resourceInputs["instanceProfileName"] = args ? args.instanceProfileName : undefined;
            resourceInputs["instanceType"] = args ? args.instanceType : undefined;
            resourceInputs["keyName"] = args ? args.keyName : undefined;
            resourceInputs["kubeletExtraArgs"] = args ? args.kubeletExtraArgs : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["launchTemplateTagSpecifications"] = args ? args.launchTemplateTagSpecifications : undefined;
            resourceInputs["maxSize"] = args ? args.maxSize : undefined;
            resourceInputs["minRefreshPercentage"] = args ? args.minRefreshPercentage : undefined;
            resourceInputs["minSize"] = args ? args.minSize : undefined;
            resourceInputs["nodeAssociatePublicIpAddress"] = args ? args.nodeAssociatePublicIpAddress : undefined;
            resourceInputs["nodePublicKey"] = args ? args.nodePublicKey : undefined;
            resourceInputs["nodeRootVolumeDeleteOnTermination"] = args ? args.nodeRootVolumeDeleteOnTermination : undefined;
            resourceInputs["nodeRootVolumeEncrypted"] = args ? args.nodeRootVolumeEncrypted : undefined;
            resourceInputs["nodeRootVolumeIops"] = args ? args.nodeRootVolumeIops : undefined;
            resourceInputs["nodeRootVolumeSize"] = args ? args.nodeRootVolumeSize : undefined;
            resourceInputs["nodeRootVolumeThroughput"] = args ? args.nodeRootVolumeThroughput : undefined;
            resourceInputs["nodeRootVolumeType"] = args ? args.nodeRootVolumeType : undefined;
            resourceInputs["nodeSecurityGroup"] = args ? args.nodeSecurityGroup : undefined;
            resourceInputs["nodeSecurityGroupId"] = args ? args.nodeSecurityGroupId : undefined;
            resourceInputs["nodeSubnetIds"] = args ? args.nodeSubnetIds : undefined;
            resourceInputs["nodeUserData"] = args ? args.nodeUserData : undefined;
            resourceInputs["nodeUserDataOverride"] = args ? args.nodeUserDataOverride : undefined;
            resourceInputs["nodeadmExtraOptions"] = args ? args.nodeadmExtraOptions : undefined;
            resourceInputs["operatingSystem"] = args ? args.operatingSystem : undefined;
            resourceInputs["spotPrice"] = args ? args.spotPrice : undefined;
            resourceInputs["taints"] = args ? args.taints : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["autoScalingGroup"] = undefined /*out*/;
        } else {
            resourceInputs["autoScalingGroup"] = undefined /*out*/;
            resourceInputs["extraNodeSecurityGroups"] = undefined /*out*/;
            resourceInputs["nodeSecurityGroup"] = undefined /*out*/;
            resourceInputs["nodeSecurityGroupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NodeGroupV2.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a NodeGroupV2 resource.
 */
export interface NodeGroupV2Args {
    /**
     * The AMI ID to use for the worker nodes.
     *
     * Defaults to the latest recommended EKS Optimized Linux AMI from the AWS Systems Manager Parameter Store.
     *
     * Note: `amiId` and `gpu` are mutually exclusive.
     *
     * See for more details:
     * - https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html.
     */
    amiId?: pulumi.Input<string>;
    /**
     * The AMI Type to use for the worker nodes. 
     *
     * Only applicable when setting an AMI ID that is of type `arm64`. 
     *
     * Note: `amiType` and `gpu` are mutually exclusive.
     */
    amiType?: pulumi.Input<string>;
    /**
     * The tags to apply to the NodeGroup's AutoScalingGroup in the CloudFormation Stack.
     *
     * Per AWS, all stack-level tags, including automatically created tags, and the `cloudFormationTags` option are propagated to resources that AWS CloudFormation supports, including the AutoScalingGroup. See https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html
     *
     * Note: Given the inheritance of auto-generated CF tags and `cloudFormationTags`, you should either supply the tag in `autoScalingGroupTags` or `cloudFormationTags`, but not both.
     */
    autoScalingGroupTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Additional args to pass directly to `/etc/eks/bootstrap.sh`. For details on available options, see: https://github.com/awslabs/amazon-eks-ami/blob/master/files/bootstrap.sh. Note that the `--apiserver-endpoint`, `--b64-cluster-ca` and `--kubelet-extra-args` flags are included automatically based on other configuration parameters.
     */
    bootstrapExtraArgs?: pulumi.Input<string>;
    /**
     * The configuration settings for Bottlerocket OS.
     * The settings will get merged with the base settings the provider uses to configure Bottlerocket.
     *
     * This includes:
     *   - settings.kubernetes.api-server
     *   - settings.kubernetes.cluster-certificate
     *   - settings.kubernetes.cluster-name
     *   - settings.kubernetes.cluster-dns-ip
     *
     * For an overview of the available settings, see https://bottlerocket.dev/en/os/1.20.x/api/settings/.
     */
    bottlerocketSettings?: pulumi.Input<{[key: string]: any}>;
    /**
     * The tags to apply to the CloudFormation Stack of the Worker NodeGroup.
     *
     * Note: Given the inheritance of auto-generated CF tags and `cloudFormationTags`, you should either supply the tag in `autoScalingGroupTags` or `cloudFormationTags`, but not both.
     */
    cloudFormationTags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The target EKS cluster.
     */
    cluster: pulumi.Input<Cluster | inputs.CoreDataArgs>;
    /**
     * The ingress rule that gives node group access.
     */
    clusterIngressRule?: pulumi.Input<pulumiAws.ec2.SecurityGroupRule>;
    /**
     * The ID of the ingress rule that gives node group access.
     */
    clusterIngressRuleId?: pulumi.Input<string>;
    /**
     * The number of worker nodes that should be running in the cluster. Defaults to 2.
     */
    desiredCapacity?: pulumi.Input<number>;
    /**
     * Enables/disables detailed monitoring of the EC2 instances.
     *
     * With detailed monitoring, all metrics, including status check metrics, are available in 1-minute intervals.
     * When enabled, you can also get aggregated data across groups of similar instances.
     *
     * Note: You are charged per metric that is sent to CloudWatch. You are not charged for data storage.
     * For more information, see "Paid tier" and "Example 1 - EC2 Detailed Monitoring" here https://aws.amazon.com/cloudwatch/pricing/.
     */
    enableDetailedMonitoring?: pulumi.Input<boolean>;
    /**
     * Encrypt the root block device of the nodes in the node group.
     */
    encryptRootBlockDevice?: pulumi.Input<boolean>;
    /**
     * Extra security groups to attach on all nodes in this worker node group.
     *
     * This additional set of security groups captures any user application rules that will be needed for the nodes.
     */
    extraNodeSecurityGroups?: pulumi.Input<pulumi.Input<pulumiAws.ec2.SecurityGroup>[]>;
    /**
     * Use the latest recommended EKS Optimized Linux AMI with GPU support for the worker nodes from the AWS Systems Manager Parameter Store.
     *
     * Defaults to false.
     *
     * Note: `gpu` and `amiId` are mutually exclusive.
     *
     * See for more details:
     * - https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html
     * - https://docs.aws.amazon.com/eks/latest/userguide/retrieve-ami-id.html
     */
    gpu?: pulumi.Input<boolean>;
    /**
     * Whether to ignore changes to the desired size of the Auto Scaling Group. This is useful when using Cluster Autoscaler.
     *
     * See [EKS best practices](https://aws.github.io/aws-eks-best-practices/cluster-autoscaling/) for more details.
     */
    ignoreScalingChanges?: boolean;
    /**
     * The IAM InstanceProfile to use on the NodeGroup. Properties instanceProfile and instanceProfileName are mutually exclusive.
     */
    instanceProfile?: pulumiAws.iam.InstanceProfile;
    /**
     * The name of the IAM InstanceProfile to use on the NodeGroup. Properties instanceProfile and instanceProfileName are mutually exclusive.
     */
    instanceProfileName?: pulumi.Input<string>;
    /**
     * The instance type to use for the cluster's nodes. Defaults to "t3.medium".
     */
    instanceType?: pulumi.Input<string>;
    /**
     * Name of the key pair to use for SSH access to worker nodes.
     */
    keyName?: pulumi.Input<string>;
    /**
     * Extra args to pass to the Kubelet. Corresponds to the options passed in the `--kubeletExtraArgs` flag to `/etc/eks/bootstrap.sh`. For example, '--port=10251 --address=0.0.0.0'. Note that the `labels` and `taints` properties will be applied to this list (using `--node-labels` and `--register-with-taints` respectively) after to the explicit `kubeletExtraArgs`.
     */
    kubeletExtraArgs?: pulumi.Input<string>;
    /**
     * Custom k8s node labels to be attached to each worker node. Adds the given key/value pairs to the `--node-labels` kubelet argument.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The tag specifications to apply to the launch template.
     */
    launchTemplateTagSpecifications?: pulumi.Input<pulumi.Input<pulumiAws.types.input.ec2.LaunchTemplateTagSpecification>[]>;
    /**
     * The maximum number of worker nodes running in the cluster. Defaults to 2.
     */
    maxSize?: pulumi.Input<number>;
    /**
     * The minimum amount of instances that should remain available during an instance refresh, expressed as a percentage. Defaults to 50.
     */
    minRefreshPercentage?: pulumi.Input<number>;
    /**
     * The minimum number of worker nodes running in the cluster. Defaults to 1.
     */
    minSize?: pulumi.Input<number>;
    /**
     * Whether or not to auto-assign public IP addresses on the EKS worker nodes. If this toggle is set to true, the EKS workers will be auto-assigned public IPs. If false, they will not be auto-assigned public IPs.
     */
    nodeAssociatePublicIpAddress?: pulumi.Input<boolean>;
    /**
     * Public key material for SSH access to worker nodes. See allowed formats at:
     * https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html
     * If not provided, no SSH access is enabled on VMs.
     */
    nodePublicKey?: pulumi.Input<string>;
    /**
     * Whether the root block device should be deleted on termination of the instance. Defaults to true.
     */
    nodeRootVolumeDeleteOnTermination?: pulumi.Input<boolean>;
    /**
     * Whether to encrypt a cluster node's root volume. Defaults to false.
     */
    nodeRootVolumeEncrypted?: pulumi.Input<boolean>;
    /**
     * The amount of provisioned IOPS. This is only valid with a volumeType of 'io1'.
     */
    nodeRootVolumeIops?: pulumi.Input<number>;
    /**
     * The size in GiB of a cluster node's root volume. Defaults to 20.
     */
    nodeRootVolumeSize?: pulumi.Input<number>;
    /**
     * Provisioned throughput performance in integer MiB/s for a cluster node's root volume. This is only valid with a volumeType of 'gp3'.
     */
    nodeRootVolumeThroughput?: pulumi.Input<number>;
    /**
     * Configured EBS type for a cluster node's root volume. Default is 'gp2'. Supported values are 'standard', 'gp2', 'gp3', 'st1', 'sc1', 'io1'.
     */
    nodeRootVolumeType?: pulumi.Input<string>;
    /**
     * The security group for the worker node group to communicate with the cluster.
     *
     * This security group requires specific inbound and outbound rules.
     *
     * See for more details:
     * https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html
     *
     * Note: The `nodeSecurityGroup` option and the cluster option`nodeSecurityGroupTags` are mutually exclusive.
     */
    nodeSecurityGroup?: pulumi.Input<pulumiAws.ec2.SecurityGroup>;
    /**
     * The ID of the security group for the worker node group to communicate with the cluster.
     *
     * This security group requires specific inbound and outbound rules.
     *
     * See for more details:
     * https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html
     *
     * Note: The `nodeSecurityGroupId` option and the cluster option `nodeSecurityGroupTags` are mutually exclusive.
     */
    nodeSecurityGroupId?: pulumi.Input<string>;
    /**
     * The set of subnets to override and use for the worker node group.
     *
     * Setting this option overrides which subnets to use for the worker node group, regardless if the cluster's `subnetIds` is set, or if `publicSubnetIds` and/or `privateSubnetIds` were set.
     */
    nodeSubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Extra code to run on node startup. This code will run after the AWS EKS bootstrapping code and before the node signals its readiness to the managing CloudFormation stack. This code must be a typical user data script: critically it must begin with an interpreter directive (i.e. a `#!`).
     */
    nodeUserData?: pulumi.Input<string>;
    /**
     * User specified code to run on node startup. This code is expected to handle the full AWS EKS bootstrapping code and signal node readiness to the managing CloudFormation stack. This code must be a complete and executable user data script in bash (Linux) or powershell (Windows).
     *
     * See for more details: https://docs.aws.amazon.com/eks/latest/userguide/worker.html
     */
    nodeUserDataOverride?: pulumi.Input<string>;
    /**
     * Extra nodeadm configuration sections to be added to the nodeadm user data. This can be shell scripts, nodeadm NodeConfig or any other user data compatible script. When configuring additional nodeadm NodeConfig sections, they'll be merged with the base settings the provider sets. You can overwrite base settings or provide additional settings this way.
     * The base settings the provider sets are:
     *   - cluster.name
     *   - cluster.apiServerEndpoint
     *   - cluster.certificateAuthority
     *   - cluster.cidr
     *
     * Note: This is only applicable when using AL2023.
     * See for more details:
     *   - https://awslabs.github.io/amazon-eks-ami/nodeadm/
     *   - https://awslabs.github.io/amazon-eks-ami/nodeadm/doc/api/
     */
    nodeadmExtraOptions?: pulumi.Input<pulumi.Input<inputs.NodeadmOptionsArgs>[]>;
    /**
     * The type of OS to use for the node group. Will be used to determine the right EKS optimized AMI to use based on the instance types and gpu configuration.
     * Valid values are `RECOMMENDED`, `AL2`, `AL2023` and `Bottlerocket`.
     *
     * Defaults to the current recommended OS.
     */
    operatingSystem?: pulumi.Input<enums.OperatingSystem>;
    /**
     * Bidding price for spot instance. If set, only spot instances will be added as worker node.
     */
    spotPrice?: pulumi.Input<string>;
    /**
     * Custom k8s node taints to be attached to each worker node. Adds the given taints to the `--register-with-taints` kubelet argument
     */
    taints?: pulumi.Input<{[key: string]: pulumi.Input<inputs.TaintArgs>}>;
    /**
     * Desired Kubernetes master / control plane version. If you do not specify a value, the latest available version is used.
     */
    version?: pulumi.Input<string>;
}
