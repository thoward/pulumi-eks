// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.eks.enums;

import com.pulumi.core.annotations.EnumType;
import java.lang.String;
import java.util.Objects;
import java.util.StringJoiner;

    /**
     * The type of the new access entry. Valid values are STANDARD, FARGATE_LINUX, EC2_LINUX, and EC2_WINDOWS.
     * Defaults to STANDARD which provides the standard workflow. EC2_LINUX and EC2_WINDOWS types disallow users to input a kubernetesGroup, and prevent associating access policies.
     * 
     */
    @EnumType
    public enum AccessEntryType {
        /**
         * Standard Access Entry Workflow. Allows users to input a username and kubernetesGroup, and to associate access policies.
         * 
         */
        Standard("STANDARD"),
        /**
         * For IAM roles used with AWS Fargate profiles.
         * 
         */
        FargateLinux("FARGATE_LINUX"),
        /**
         * For IAM roles associated with self-managed Linux node groups. Allows the nodes to join the cluster.
         * 
         */
        EC2Linux("EC2_LINUX"),
        /**
         * For IAM roles associated with self-managed Windows node groups. Allows the nodes to join the cluster.
         * 
         */
        EC2Windows("EC2_WINDOWS"),
        /**
         * For IAM roles associated with EC2 instances that need access policies. Allows the nodes to join the cluster.
         * 
         */
        EC2("EC2");

        private final String value;

        AccessEntryType(String value) {
            this.value = Objects.requireNonNull(value);
        }

        @EnumType.Converter
        public String getValue() {
            return this.value;
        }

        @Override
        public java.lang.String toString() {
            return new StringJoiner(", ", "AccessEntryType[", "]")
                .add("value='" + this.value + "'")
                .toString();
        }
    }
