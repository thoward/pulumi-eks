// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.eks;

import com.pulumi.aws.eks.NodeGroup;
import com.pulumi.core.Output;
import com.pulumi.core.annotations.Export;
import com.pulumi.core.annotations.ResourceType;
import com.pulumi.core.internal.Codegen;
import com.pulumi.eks.ManagedNodeGroupArgs;
import com.pulumi.eks.Utilities;
import java.lang.String;
import javax.annotation.Nullable;

/**
 * Manages an EKS Node Group, which can provision and optionally update an Auto Scaling Group of Kubernetes worker nodes compatible with EKS. Additional documentation about this functionality can be found in the [EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html).
 * 
 * ## Example Usage
 * ### Basic Managed Node Group
 * This example demonstrates creating a managed node group with typical defaults. The node group uses the latest EKS-optimized Amazon Linux AMI, creates 2 nodes, and runs on t3.medium instances. Instance security groups are automatically configured.
 * 
 * <pre>
 * {@code
 * package generated_program;
 * 
 * import com.pulumi.Context;
 * import com.pulumi.Pulumi;
 * import com.pulumi.core.Output;
 * import com.pulumi.awsx.ec2.Vpc;
 * import com.pulumi.awsx.ec2.VpcArgs;
 * import com.pulumi.eks.Cluster;
 * import com.pulumi.eks.ClusterArgs;
 * import com.pulumi.aws.iam.Role;
 * import com.pulumi.aws.iam.RoleArgs;
 * import com.pulumi.aws.iam.RolePolicyAttachment;
 * import com.pulumi.aws.iam.RolePolicyAttachmentArgs;
 * import com.pulumi.eks.ManagedNodeGroup;
 * import com.pulumi.eks.ManagedNodeGroupArgs;
 * import static com.pulumi.codegen.internal.Serialization.*;
 * import java.util.List;
 * import java.util.ArrayList;
 * import java.util.Map;
 * import java.io.File;
 * import java.nio.file.Files;
 * import java.nio.file.Paths;
 * 
 * public class App {
 *     public static void main(String[] args) {
 *         Pulumi.run(App::stack);
 *     }
 * 
 *     public static void stack(Context ctx) {
 *         var eksVpc = new Vpc("eksVpc", VpcArgs.builder()
 *             .enableDnsHostnames(true)
 *             .cidrBlock("10.0.0.0/16")
 *             .build());
 * 
 *         var eksCluster = new Cluster("eksCluster", ClusterArgs.builder()
 *             .vpcId(eksVpc.vpcId())
 *             .authenticationMode("API")
 *             .publicSubnetIds(eksVpc.publicSubnetIds())
 *             .privateSubnetIds(eksVpc.privateSubnetIds())
 *             .skipDefaultNodeGroup(true)
 *             .build());
 * 
 *         var nodeRole = new Role("nodeRole", RoleArgs.builder()
 *             .assumeRolePolicy(serializeJson(
 *                 jsonObject(
 *                     jsonProperty("Version", "2012-10-17"),
 *                     jsonProperty("Statement", jsonArray(jsonObject(
 *                         jsonProperty("Action", "sts:AssumeRole"),
 *                         jsonProperty("Effect", "Allow"),
 *                         jsonProperty("Sid", ""),
 *                         jsonProperty("Principal", jsonObject(
 *                             jsonProperty("Service", "ec2.amazonaws.com")
 *                         ))
 *                     )))
 *                 )))
 *             .build());
 * 
 *         var workerNodePolicy = new RolePolicyAttachment("workerNodePolicy", RolePolicyAttachmentArgs.builder()
 *             .role(nodeRole.name())
 *             .policyArn("arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy")
 *             .build());
 * 
 *         var cniPolicy = new RolePolicyAttachment("cniPolicy", RolePolicyAttachmentArgs.builder()
 *             .role(nodeRole.name())
 *             .policyArn("arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy")
 *             .build());
 * 
 *         var registryPolicy = new RolePolicyAttachment("registryPolicy", RolePolicyAttachmentArgs.builder()
 *             .role(nodeRole.name())
 *             .policyArn("arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly")
 *             .build());
 * 
 *         var nodeGroup = new ManagedNodeGroup("nodeGroup", ManagedNodeGroupArgs.builder()
 *             .cluster(eksCluster)
 *             .nodeRole(nodeRole)
 *             .build());
 *     }
 * }
 * }
 * </pre>
 * 
 */
@ResourceType(type="eks:index:ManagedNodeGroup")
public class ManagedNodeGroup extends com.pulumi.resources.ComponentResource {
    /**
     * The AWS managed node group.
     * 
     */
    @Export(name="nodeGroup", refs={NodeGroup.class}, tree="[0]")
    private Output<NodeGroup> nodeGroup;

    /**
     * @return The AWS managed node group.
     * 
     */
    public Output<NodeGroup> nodeGroup() {
        return this.nodeGroup;
    }
    /**
     * The name of the placement group created for the managed node group.
     * 
     */
    @Export(name="placementGroupName", refs={String.class}, tree="[0]")
    private Output<String> placementGroupName;

    /**
     * @return The name of the placement group created for the managed node group.
     * 
     */
    public Output<String> placementGroupName() {
        return this.placementGroupName;
    }

    /**
     *
     * @param name The _unique_ name of the resulting resource.
     */
    public ManagedNodeGroup(java.lang.String name) {
        this(name, ManagedNodeGroupArgs.Empty);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     */
    public ManagedNodeGroup(java.lang.String name, ManagedNodeGroupArgs args) {
        this(name, args, null);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param options A bag of options that control this resource's behavior.
     */
    public ManagedNodeGroup(java.lang.String name, ManagedNodeGroupArgs args, @Nullable com.pulumi.resources.ComponentResourceOptions options) {
        super("eks:index:ManagedNodeGroup", name, makeArgs(args, options), makeResourceOptions(options, Codegen.empty()), true);
    }

    private static ManagedNodeGroupArgs makeArgs(ManagedNodeGroupArgs args, @Nullable com.pulumi.resources.ComponentResourceOptions options) {
        if (options != null && options.getUrn().isPresent()) {
            return null;
        }
        return args == null ? ManagedNodeGroupArgs.Empty : args;
    }

    private static com.pulumi.resources.ComponentResourceOptions makeResourceOptions(@Nullable com.pulumi.resources.ComponentResourceOptions options, @Nullable Output<java.lang.String> id) {
        var defaultOptions = com.pulumi.resources.ComponentResourceOptions.builder()
            .version(Utilities.getVersion())
            .build();
        return com.pulumi.resources.ComponentResourceOptions.merge(defaultOptions, options, id);
    }

}
