// *** WARNING: this file was generated by pulumi-gen-eks. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Eks.Inputs
{

    /// <summary>
    /// Configuration Options for EKS Auto Mode. If EKS Auto Mode is enabled, AWS will manage cluster infrastructure on your behalf.
    /// 
    /// For more information, see: https://docs.aws.amazon.com/eks/latest/userguide/automode.html
    /// </summary>
    public sealed class AutoModeOptionsArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Compute configuration for EKS Auto Mode.
        /// </summary>
        [Input("computeConfig")]
        public Input<Inputs.ClusterComputeConfigArgs>? ComputeConfig { get; set; }

        /// <summary>
        /// Whether to create an IAM role for the EKS Auto Mode node group if none is provided in `computeConfig`.
        /// </summary>
        [Input("createNodeRole")]
        public bool? CreateNodeRole { get; set; }

        /// <summary>
        /// Whether to enable EKS Auto Mode. If enabled, EKS will manage node pools, EBS volumes and Load Balancers for you.
        /// When enabled, the vpc-cni and kube-proxy will not be enabled by default because EKS Auto Mode includes pod networking capabilities.
        /// </summary>
        [Input("enabled", required: true)]
        public bool Enabled { get; set; }

        public AutoModeOptionsArgs()
        {
            CreateNodeRole = true;
        }
        public static new AutoModeOptionsArgs Empty => new AutoModeOptionsArgs();
    }
}
