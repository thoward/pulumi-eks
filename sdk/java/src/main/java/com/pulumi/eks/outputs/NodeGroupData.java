// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.eks.outputs;

import com.pulumi.aws.ec2.SecurityGroup;
import com.pulumi.core.annotations.CustomType;
import java.lang.String;
import java.util.List;
import java.util.Objects;

@CustomType
public final class NodeGroupData {
    /**
     * @return The AutoScalingGroup name for the node group.
     * 
     */
    private String autoScalingGroupName;
    /**
     * @return The additional security groups for the node group that captures user-specific rules.
     * 
     */
    private List<SecurityGroup> extraNodeSecurityGroups;
    /**
     * @return The security group for the node group to communicate with the cluster.
     * 
     */
    private SecurityGroup nodeSecurityGroup;

    private NodeGroupData() {}
    /**
     * @return The AutoScalingGroup name for the node group.
     * 
     */
    public String autoScalingGroupName() {
        return this.autoScalingGroupName;
    }
    /**
     * @return The additional security groups for the node group that captures user-specific rules.
     * 
     */
    public List<SecurityGroup> extraNodeSecurityGroups() {
        return this.extraNodeSecurityGroups;
    }
    /**
     * @return The security group for the node group to communicate with the cluster.
     * 
     */
    public SecurityGroup nodeSecurityGroup() {
        return this.nodeSecurityGroup;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static Builder builder(NodeGroupData defaults) {
        return new Builder(defaults);
    }
    @CustomType.Builder
    public static final class Builder {
        private String autoScalingGroupName;
        private List<SecurityGroup> extraNodeSecurityGroups;
        private SecurityGroup nodeSecurityGroup;
        public Builder() {}
        public Builder(NodeGroupData defaults) {
    	      Objects.requireNonNull(defaults);
    	      this.autoScalingGroupName = defaults.autoScalingGroupName;
    	      this.extraNodeSecurityGroups = defaults.extraNodeSecurityGroups;
    	      this.nodeSecurityGroup = defaults.nodeSecurityGroup;
        }

        @CustomType.Setter
        public Builder autoScalingGroupName(String autoScalingGroupName) {
            this.autoScalingGroupName = Objects.requireNonNull(autoScalingGroupName);
            return this;
        }
        @CustomType.Setter
        public Builder extraNodeSecurityGroups(List<SecurityGroup> extraNodeSecurityGroups) {
            this.extraNodeSecurityGroups = Objects.requireNonNull(extraNodeSecurityGroups);
            return this;
        }
        public Builder extraNodeSecurityGroups(SecurityGroup... extraNodeSecurityGroups) {
            return extraNodeSecurityGroups(List.of(extraNodeSecurityGroups));
        }
        @CustomType.Setter
        public Builder nodeSecurityGroup(SecurityGroup nodeSecurityGroup) {
            this.nodeSecurityGroup = Objects.requireNonNull(nodeSecurityGroup);
            return this;
        }
        public NodeGroupData build() {
            final var _resultValue = new NodeGroupData();
            _resultValue.autoScalingGroupName = autoScalingGroupName;
            _resultValue.extraNodeSecurityGroups = extraNodeSecurityGroups;
            _resultValue.nodeSecurityGroup = nodeSecurityGroup;
            return _resultValue;
        }
    }
}
