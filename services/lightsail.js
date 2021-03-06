awsim['lightsail'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2016-11-28",
    "endpointPrefix":"lightsail",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"Amazon Lightsail",
    "serviceId":"Lightsail",
    "signatureVersion":"v4",
    "targetPrefix":"Lightsail_20161128",
    "uid":"lightsail-2016-11-28"
  },
  "operations":{
    "AllocateStaticIp":{
      "name":"AllocateStaticIp",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AllocateStaticIpRequest"},
      "output":{"shape":"AllocateStaticIpResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Allocates a static IP address.</p>"
    },
    "AttachDisk":{
      "name":"AttachDisk",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AttachDiskRequest"},
      "output":{"shape":"AttachDiskResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p>"
    },
    "AttachInstancesToLoadBalancer":{
      "name":"AttachInstancesToLoadBalancer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AttachInstancesToLoadBalancerRequest"},
      "output":{"shape":"AttachInstancesToLoadBalancerResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p>"
    },
    "AttachLoadBalancerTlsCertificate":{
      "name":"AttachLoadBalancerTlsCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AttachLoadBalancerTlsCertificateRequest"},
      "output":{"shape":"AttachLoadBalancerTlsCertificateResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> operation with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p>"
    },
    "AttachStaticIp":{
      "name":"AttachStaticIp",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AttachStaticIpRequest"},
      "output":{"shape":"AttachStaticIpResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>"
    },
    "CloseInstancePublicPorts":{
      "name":"CloseInstancePublicPorts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CloseInstancePublicPortsRequest"},
      "output":{"shape":"CloseInstancePublicPortsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Closes the public ports on a specific Amazon Lightsail instance.</p>"
    },
    "CreateDisk":{
      "name":"CreateDisk",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDiskRequest"},
      "output":{"shape":"CreateDiskResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates a block storage disk that can be attached to a Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail\">Regions and Availability Zones in Lightsail</a>.</p>"
    },
    "CreateDiskFromSnapshot":{
      "name":"CreateDiskFromSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDiskFromSnapshotRequest"},
      "output":{"shape":"CreateDiskFromSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates a block storage disk from a disk snapshot that can be attached to a Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail\">Regions and Availability Zones in Lightsail</a>.</p>"
    },
    "CreateDiskSnapshot":{
      "name":"CreateDiskSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDiskSnapshotRequest"},
      "output":{"shape":"CreateDiskSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p>"
    },
    "CreateDomain":{
      "name":"CreateDomain",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDomainRequest"},
      "output":{"shape":"CreateDomainResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates a domain resource for the specified domain (e.g., example.com).</p>"
    },
    "CreateDomainEntry":{
      "name":"CreateDomainEntry",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDomainEntryRequest"},
      "output":{"shape":"CreateDomainEntryResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates one of the following entry records associated with the domain: A record, CNAME record, TXT record, or MX record.</p>"
    },
    "CreateInstanceSnapshot":{
      "name":"CreateInstanceSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateInstanceSnapshotRequest"},
      "output":{"shape":"CreateInstanceSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p>"
    },
    "CreateInstances":{
      "name":"CreateInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateInstancesRequest"},
      "output":{"shape":"CreateInstancesResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates one or more Amazon Lightsail virtual private servers, or <i>instances</i>.</p>"
    },
    "CreateInstancesFromSnapshot":{
      "name":"CreateInstancesFromSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateInstancesFromSnapshotRequest"},
      "output":{"shape":"CreateInstancesFromSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Uses a specific snapshot as a blueprint for creating one or more new instances that are based on that identical configuration.</p>"
    },
    "CreateKeyPair":{
      "name":"CreateKeyPair",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateKeyPairRequest"},
      "output":{"shape":"CreateKeyPairResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates sn SSH key pair.</p>"
    },
    "CreateLoadBalancer":{
      "name":"CreateLoadBalancer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateLoadBalancerRequest"},
      "output":{"shape":"CreateLoadBalancerResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing\">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p>"
    },
    "CreateLoadBalancerTlsCertificate":{
      "name":"CreateLoadBalancerTlsCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateLoadBalancerTlsCertificateRequest"},
      "output":{"shape":"CreateLoadBalancerTlsCertificateResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Creates a Lightsail load balancer TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>"
    },
    "DeleteDisk":{
      "name":"DeleteDisk",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDiskRequest"},
      "output":{"shape":"DeleteDiskResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note>"
    },
    "DeleteDiskSnapshot":{
      "name":"DeleteDiskSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDiskSnapshotRequest"},
      "output":{"shape":"DeleteDiskSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p>"
    },
    "DeleteDomain":{
      "name":"DeleteDomain",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDomainRequest"},
      "output":{"shape":"DeleteDomainResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes the specified domain recordset and all of its domain records.</p>"
    },
    "DeleteDomainEntry":{
      "name":"DeleteDomainEntry",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDomainEntryRequest"},
      "output":{"shape":"DeleteDomainEntryResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes a specific domain entry.</p>"
    },
    "DeleteInstance":{
      "name":"DeleteInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteInstanceRequest"},
      "output":{"shape":"DeleteInstanceResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes a specific Amazon Lightsail virtual private server, or <i>instance</i>.</p>"
    },
    "DeleteInstanceSnapshot":{
      "name":"DeleteInstanceSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteInstanceSnapshotRequest"},
      "output":{"shape":"DeleteInstanceSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p>"
    },
    "DeleteKeyPair":{
      "name":"DeleteKeyPair",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteKeyPairRequest"},
      "output":{"shape":"DeleteKeyPairResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes a specific SSH key pair.</p>"
    },
    "DeleteLoadBalancer":{
      "name":"DeleteLoadBalancer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteLoadBalancerRequest"},
      "output":{"shape":"DeleteLoadBalancerResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p>"
    },
    "DeleteLoadBalancerTlsCertificate":{
      "name":"DeleteLoadBalancerTlsCertificate",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteLoadBalancerTlsCertificateRequest"},
      "output":{"shape":"DeleteLoadBalancerTlsCertificateResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p>"
    },
    "DetachDisk":{
      "name":"DetachDisk",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetachDiskRequest"},
      "output":{"shape":"DetachDiskResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p>"
    },
    "DetachInstancesFromLoadBalancer":{
      "name":"DetachInstancesFromLoadBalancer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetachInstancesFromLoadBalancerRequest"},
      "output":{"shape":"DetachInstancesFromLoadBalancerResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p>"
    },
    "DetachStaticIp":{
      "name":"DetachStaticIp",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DetachStaticIpRequest"},
      "output":{"shape":"DetachStaticIpResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Detaches a static IP from the Amazon Lightsail instance to which it is attached.</p>"
    },
    "DownloadDefaultKeyPair":{
      "name":"DownloadDefaultKeyPair",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DownloadDefaultKeyPairRequest"},
      "output":{"shape":"DownloadDefaultKeyPairResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Downloads the default SSH key pair from the user's account.</p>"
    },
    "GetActiveNames":{
      "name":"GetActiveNames",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetActiveNamesRequest"},
      "output":{"shape":"GetActiveNamesResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns the names of all active (not deleted) resources.</p>"
    },
    "GetBlueprints":{
      "name":"GetBlueprints",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetBlueprintsRequest"},
      "output":{"shape":"GetBlueprintsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new virtual private server already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p>"
    },
    "GetBundles":{
      "name":"GetBundles",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetBundlesRequest"},
      "output":{"shape":"GetBundlesResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or <i>instance</i>).</p>"
    },
    "GetDisk":{
      "name":"GetDisk",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDiskRequest"},
      "output":{"shape":"GetDiskResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific block storage disk.</p>"
    },
    "GetDiskSnapshot":{
      "name":"GetDiskSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDiskSnapshotRequest"},
      "output":{"shape":"GetDiskSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific block storage disk snapshot.</p>"
    },
    "GetDiskSnapshots":{
      "name":"GetDiskSnapshots",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDiskSnapshotsRequest"},
      "output":{"shape":"GetDiskSnapshotsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about all block storage disk snapshots in your AWS account and region.</p> <p>If you are describing a long list of disk snapshots, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.</p>"
    },
    "GetDisks":{
      "name":"GetDisks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDisksRequest"},
      "output":{"shape":"GetDisksResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about all block storage disks in your AWS account and region.</p> <p>If you are describing a long list of disks, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.</p>"
    },
    "GetDomain":{
      "name":"GetDomain",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDomainRequest"},
      "output":{"shape":"GetDomainResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific domain recordset.</p>"
    },
    "GetDomains":{
      "name":"GetDomains",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetDomainsRequest"},
      "output":{"shape":"GetDomainsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns a list of all domains in the user's account.</p>"
    },
    "GetInstance":{
      "name":"GetInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceRequest"},
      "output":{"shape":"GetInstanceResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific Amazon Lightsail instance, which is a virtual private server.</p>"
    },
    "GetInstanceAccessDetails":{
      "name":"GetInstanceAccessDetails",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceAccessDetailsRequest"},
      "output":{"shape":"GetInstanceAccessDetailsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p>"
    },
    "GetInstanceMetricData":{
      "name":"GetInstanceMetricData",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceMetricDataRequest"},
      "output":{"shape":"GetInstanceMetricDataResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p>"
    },
    "GetInstancePortStates":{
      "name":"GetInstancePortStates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstancePortStatesRequest"},
      "output":{"shape":"GetInstancePortStatesResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns the port states for a specific virtual private server, or <i>instance</i>.</p>"
    },
    "GetInstanceSnapshot":{
      "name":"GetInstanceSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceSnapshotRequest"},
      "output":{"shape":"GetInstanceSnapshotResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific instance snapshot.</p>"
    },
    "GetInstanceSnapshots":{
      "name":"GetInstanceSnapshots",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceSnapshotsRequest"},
      "output":{"shape":"GetInstanceSnapshotsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns all instance snapshots for the user's account.</p>"
    },
    "GetInstanceState":{
      "name":"GetInstanceState",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstanceStateRequest"},
      "output":{"shape":"GetInstanceStateResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns the state of a specific instance. Works on one instance at a time.</p>"
    },
    "GetInstances":{
      "name":"GetInstances",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetInstancesRequest"},
      "output":{"shape":"GetInstancesResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.</p>"
    },
    "GetKeyPair":{
      "name":"GetKeyPair",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetKeyPairRequest"},
      "output":{"shape":"GetKeyPairResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific key pair.</p>"
    },
    "GetKeyPairs":{
      "name":"GetKeyPairs",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetKeyPairsRequest"},
      "output":{"shape":"GetKeyPairsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about all key pairs in the user's account.</p>"
    },
    "GetLoadBalancer":{
      "name":"GetLoadBalancer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetLoadBalancerRequest"},
      "output":{"shape":"GetLoadBalancerResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about the specified Lightsail load balancer.</p>"
    },
    "GetLoadBalancerMetricData":{
      "name":"GetLoadBalancerMetricData",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetLoadBalancerMetricDataRequest"},
      "output":{"shape":"GetLoadBalancerMetricDataResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about health metrics for your Lightsail load balancer.</p>"
    },
    "GetLoadBalancerTlsCertificates":{
      "name":"GetLoadBalancerTlsCertificates",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetLoadBalancerTlsCertificatesRequest"},
      "output":{"shape":"GetLoadBalancerTlsCertificatesResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>"
    },
    "GetLoadBalancers":{
      "name":"GetLoadBalancers",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetLoadBalancersRequest"},
      "output":{"shape":"GetLoadBalancersResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about all load balancers in an account.</p> <p>If you are describing a long list of load balancers, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.</p>"
    },
    "GetOperation":{
      "name":"GetOperation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetOperationRequest"},
      "output":{"shape":"GetOperationResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.</p>"
    },
    "GetOperations":{
      "name":"GetOperations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetOperationsRequest"},
      "output":{"shape":"GetOperationsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>"
    },
    "GetOperationsForResource":{
      "name":"GetOperationsForResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetOperationsForResourceRequest"},
      "output":{"shape":"GetOperationsForResourceResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>"
    },
    "GetRegions":{
      "name":"GetRegions",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetRegionsRequest"},
      "output":{"shape":"GetRegionsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the availability zones in a region.</p>"
    },
    "GetStaticIp":{
      "name":"GetStaticIp",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetStaticIpRequest"},
      "output":{"shape":"GetStaticIpResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about a specific static IP.</p>"
    },
    "GetStaticIps":{
      "name":"GetStaticIps",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"GetStaticIpsRequest"},
      "output":{"shape":"GetStaticIpsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns information about all static IPs in the user's account.</p>"
    },
    "ImportKeyPair":{
      "name":"ImportKeyPair",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ImportKeyPairRequest"},
      "output":{"shape":"ImportKeyPairResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Imports a public SSH key from a specific key pair.</p>"
    },
    "IsVpcPeered":{
      "name":"IsVpcPeered",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"IsVpcPeeredRequest"},
      "output":{"shape":"IsVpcPeeredResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>"
    },
    "OpenInstancePublicPorts":{
      "name":"OpenInstancePublicPorts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"OpenInstancePublicPortsRequest"},
      "output":{"shape":"OpenInstancePublicPortsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Adds public ports to an Amazon Lightsail instance.</p>"
    },
    "PeerVpc":{
      "name":"PeerVpc",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PeerVpcRequest"},
      "output":{"shape":"PeerVpcResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Tries to peer the Lightsail VPC with the user's default VPC.</p>"
    },
    "PutInstancePublicPorts":{
      "name":"PutInstancePublicPorts",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"PutInstancePublicPortsRequest"},
      "output":{"shape":"PutInstancePublicPortsResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for every protocol not included in the current request.</p>"
    },
    "RebootInstance":{
      "name":"RebootInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RebootInstanceRequest"},
      "output":{"shape":"RebootInstanceResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Restarts a specific instance. When your Amazon Lightsail instance is finished rebooting, Lightsail assigns a new public IP address. To use the same IP address after restarting, create a static IP address and attach it to the instance.</p>"
    },
    "ReleaseStaticIp":{
      "name":"ReleaseStaticIp",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ReleaseStaticIpRequest"},
      "output":{"shape":"ReleaseStaticIpResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Deletes a specific static IP from your account.</p>"
    },
    "StartInstance":{
      "name":"StartInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartInstanceRequest"},
      "output":{"shape":"StartInstanceResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the reboot instance operation.</p>"
    },
    "StopInstance":{
      "name":"StopInstance",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StopInstanceRequest"},
      "output":{"shape":"StopInstanceResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Stops a specific Amazon Lightsail instance that is currently running.</p>"
    },
    "UnpeerVpc":{
      "name":"UnpeerVpc",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UnpeerVpcRequest"},
      "output":{"shape":"UnpeerVpcResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>"
    },
    "UpdateDomainEntry":{
      "name":"UpdateDomainEntry",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateDomainEntryRequest"},
      "output":{"shape":"UpdateDomainEntryResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Updates a domain recordset after it is created.</p>"
    },
    "UpdateLoadBalancerAttribute":{
      "name":"UpdateLoadBalancerAttribute",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateLoadBalancerAttributeRequest"},
      "output":{"shape":"UpdateLoadBalancerAttributeResult"},
      "errors":[
        {"shape":"ServiceException"},
        {"shape":"InvalidInputException"},
        {"shape":"NotFoundException"},
        {"shape":"OperationFailureException"},
        {"shape":"AccessDeniedException"},
        {"shape":"AccountSetupInProgressException"},
        {"shape":"UnauthenticatedException"}
      ],
      "documentation":"<p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p>"
    }
  },
  "shapes":{
    "AccessDeniedException":{
      "type":"structure",
      "members":{
        "code":{"shape":"string"},
        "docs":{"shape":"string"},
        "message":{"shape":"string"},
        "tip":{"shape":"string"}
      },
      "documentation":"<p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>",
      "exception":true
    },
    "AccessDirection":{
      "type":"string",
      "enum":[
        "inbound",
        "outbound"
      ]
    },
    "AccountSetupInProgressException":{
      "type":"structure",
      "members":{
        "code":{"shape":"string"},
        "docs":{"shape":"string"},
        "message":{"shape":"string"},
        "tip":{"shape":"string"}
      },
      "documentation":"<p>Lightsail throws this exception when an account is still in the setup in progress state.</p>",
      "exception":true
    },
    "AllocateStaticIpRequest":{
      "type":"structure",
      "required":["staticIpName"],
      "members":{
        "staticIpName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the static IP address.</p>"
        }
      }
    },
    "AllocateStaticIpResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the static IP address you allocated.</p>"
        }
      }
    },
    "AttachDiskRequest":{
      "type":"structure",
      "required":[
        "diskName",
        "instanceName",
        "diskPath"
      ],
      "members":{
        "diskName":{
          "shape":"ResourceName",
          "documentation":"<p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>"
        },
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the Lightsail instance where you want to utilize the storage disk.</p>"
        },
        "diskPath":{
          "shape":"NonEmptyString",
          "documentation":"<p>The disk path to expose to the instance (e.g., <code>/dev/xvdf</code>).</p>"
        }
      }
    },
    "AttachDiskResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "AttachInstancesToLoadBalancerRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "instanceNames"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer.</p>"
        },
        "instanceNames":{
          "shape":"ResourceNameList",
          "documentation":"<p>An array of strings representing the instance name(s) you want to attach to your load balancer.</p> <p>An instance must be <code>running</code> before you can attach it to your load balancer.</p> <p>There are no additional limits on the number of instances you can attach to your load balancer, aside from the limit of Lightsail instances you can create in your account (20).</p>"
        }
      }
    },
    "AttachInstancesToLoadBalancerResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object representing the API operations.</p>"
        }
      }
    },
    "AttachLoadBalancerTlsCertificateRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "certificateName"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer to which you want to associate the SSL/TLS certificate.</p>"
        },
        "certificateName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of your SSL/TLS certificate.</p>"
        }
      }
    },
    "AttachLoadBalancerTlsCertificateResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object representing the API operations.</p> <p>These SSL/TLS certificates are only usable by Lightsail load balancers. You can't get the certificate and use it for another purpose.</p>"
        }
      }
    },
    "AttachStaticIpRequest":{
      "type":"structure",
      "required":[
        "staticIpName",
        "instanceName"
      ],
      "members":{
        "staticIpName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the static IP.</p>"
        },
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The instance name to which you want to attach the static IP address.</p>"
        }
      }
    },
    "AttachStaticIpResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about your API operations.</p>"
        }
      }
    },
    "AttachedDiskMap":{
      "type":"map",
      "key":{"shape":"ResourceName"},
      "value":{"shape":"DiskMapList"}
    },
    "AvailabilityZone":{
      "type":"structure",
      "members":{
        "zoneName":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the Availability Zone. The format is <code>us-east-2a</code> (case-sensitive).</p>"
        },
        "state":{
          "shape":"NonEmptyString",
          "documentation":"<p>The state of the Availability Zone.</p>"
        }
      },
      "documentation":"<p>Describes an Availability Zone.</p>"
    },
    "AvailabilityZoneList":{
      "type":"list",
      "member":{"shape":"AvailabilityZone"}
    },
    "Base64":{"type":"string"},
    "Blueprint":{
      "type":"structure",
      "members":{
        "blueprintId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID for the virtual private server image (e.g., <code>app_wordpress_4_4</code> or <code>app_lamp_7_0</code>).</p>"
        },
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>"
        },
        "group":{
          "shape":"NonEmptyString",
          "documentation":"<p>The group name of the blueprint (e.g., <code>amazon-linux</code>).</p>"
        },
        "type":{
          "shape":"BlueprintType",
          "documentation":"<p>The type of the blueprint (e.g., <code>os</code> or <code>app</code>).</p>"
        },
        "description":{
          "shape":"string",
          "documentation":"<p>The description of the blueprint.</p>"
        },
        "isActive":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether the blueprint is active. When you update your blueprints, you will inactivate old blueprints and keep the most recent versions active.</p>"
        },
        "minPower":{
          "shape":"integer",
          "documentation":"<p>The minimum bundle power required to run this blueprint. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500. <code>0</code> indicates that the blueprint runs on all instance sizes. </p>"
        },
        "version":{
          "shape":"string",
          "documentation":"<p>The version number of the operating system, application, or stack (e.g., <code>2016.03.0</code>).</p>"
        },
        "versionCode":{
          "shape":"string",
          "documentation":"<p>The version code.</p>"
        },
        "productUrl":{
          "shape":"string",
          "documentation":"<p>The product URL to learn more about the image or blueprint.</p>"
        },
        "licenseUrl":{
          "shape":"string",
          "documentation":"<p>The end-user license agreement URL for the image or blueprint.</p>"
        },
        "platform":{
          "shape":"InstancePlatform",
          "documentation":"<p>The operating system platform (either Linux/Unix-based or Windows Server-based) of the blueprint.</p>"
        }
      },
      "documentation":"<p>Describes a blueprint (a virtual private server image).</p>"
    },
    "BlueprintList":{
      "type":"list",
      "member":{"shape":"Blueprint"}
    },
    "BlueprintType":{
      "type":"string",
      "enum":[
        "os",
        "app"
      ]
    },
    "Bundle":{
      "type":"structure",
      "members":{
        "price":{
          "shape":"float",
          "documentation":"<p>The price in US dollars (e.g., <code>5.0</code>).</p>"
        },
        "cpuCount":{
          "shape":"integer",
          "documentation":"<p>The number of vCPUs included in the bundle (e.g., <code>2</code>).</p>"
        },
        "diskSizeInGb":{
          "shape":"integer",
          "documentation":"<p>The size of the SSD (e.g., <code>30</code>).</p>"
        },
        "bundleId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The bundle ID (e.g., <code>micro_1_0</code>).</p>"
        },
        "instanceType":{
          "shape":"string",
          "documentation":"<p>The Amazon EC2 instance type (e.g., <code>t2.micro</code>).</p>"
        },
        "isActive":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether the bundle is active.</p>"
        },
        "name":{
          "shape":"string",
          "documentation":"<p>A friendly name for the bundle (e.g., <code>Micro</code>).</p>"
        },
        "power":{
          "shape":"integer",
          "documentation":"<p>A numeric value that represents the power of the bundle (e.g., <code>500</code>). You can use the bundle's power value in conjunction with a blueprint's minimum power value to determine whether the blueprint will run on the bundle. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500.</p>"
        },
        "ramSizeInGb":{
          "shape":"float",
          "documentation":"<p>The amount of RAM in GB (e.g., <code>2.0</code>).</p>"
        },
        "transferPerMonthInGb":{
          "shape":"integer",
          "documentation":"<p>The data transfer rate per month in GB (e.g., <code>2000</code>).</p>"
        },
        "supportedPlatforms":{
          "shape":"InstancePlatformList",
          "documentation":"<p>The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle supports. You can only launch a <code>WINDOWS</code> bundle on a blueprint that supports the <code>WINDOWS</code> platform. <code>LINUX_UNIX</code> blueprints require a <code>LINUX_UNIX</code> bundle.</p>"
        }
      },
      "documentation":"<p>Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).</p>"
    },
    "BundleList":{
      "type":"list",
      "member":{"shape":"Bundle"}
    },
    "CloseInstancePublicPortsRequest":{
      "type":"structure",
      "required":[
        "portInfo",
        "instanceName"
      ],
      "members":{
        "portInfo":{
          "shape":"PortInfo",
          "documentation":"<p>Information about the public port you are trying to close.</p>"
        },
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance on which you're attempting to close the public ports.</p>"
        }
      }
    },
    "CloseInstancePublicPortsResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs that contains information about the operation.</p>"
        }
      }
    },
    "CreateDiskFromSnapshotRequest":{
      "type":"structure",
      "required":[
        "diskName",
        "diskSnapshotName",
        "availabilityZone",
        "sizeInGb"
      ],
      "members":{
        "diskName":{
          "shape":"ResourceName",
          "documentation":"<p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>"
        },
        "diskSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the disk snapshot (e.g., <code>my-snapshot</code>) from which to create the new storage disk.</p>"
        },
        "availabilityZone":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>). Choose the same Availability Zone as the Lightsail instance where you want to create the disk.</p> <p>Use the GetRegions operation to list the Availability Zones where Lightsail is currently available.</p>"
        },
        "sizeInGb":{
          "shape":"integer",
          "documentation":"<p>The size of the disk in GB (e.g., <code>32</code>).</p>"
        }
      }
    },
    "CreateDiskFromSnapshotResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "CreateDiskRequest":{
      "type":"structure",
      "required":[
        "diskName",
        "availabilityZone",
        "sizeInGb"
      ],
      "members":{
        "diskName":{
          "shape":"ResourceName",
          "documentation":"<p>The unique Lightsail disk name (e.g., <code>my-disk</code>).</p>"
        },
        "availabilityZone":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Availability Zone where you want to create the disk (e.g., <code>us-east-2a</code>). Choose the same Availability Zone as the Lightsail instance where you want to create the disk.</p> <p>Use the GetRegions operation to list the Availability Zones where Lightsail is currently available.</p>"
        },
        "sizeInGb":{
          "shape":"integer",
          "documentation":"<p>The size of the disk in GB (e.g., <code>32</code>).</p>"
        }
      }
    },
    "CreateDiskResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "CreateDiskSnapshotRequest":{
      "type":"structure",
      "required":[
        "diskName",
        "diskSnapshotName"
      ],
      "members":{
        "diskName":{
          "shape":"ResourceName",
          "documentation":"<p>The unique name of the source disk (e.g., <code>my-source-disk</code>).</p>"
        },
        "diskSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the destination disk snapshot (e.g., <code>my-disk-snapshot</code>) based on the source disk.</p>"
        }
      }
    },
    "CreateDiskSnapshotResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "CreateDomainEntryRequest":{
      "type":"structure",
      "required":[
        "domainName",
        "domainEntry"
      ],
      "members":{
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The domain name (e.g., <code>example.com</code>) for which you want to create the domain entry.</p>"
        },
        "domainEntry":{
          "shape":"DomainEntry",
          "documentation":"<p>An array of key-value pairs containing information about the domain entry request.</p>"
        }
      }
    },
    "CreateDomainEntryResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the operation.</p>"
        }
      }
    },
    "CreateDomainRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The domain name to manage (e.g., <code>example.com</code>).</p> <note> <p>You cannot register a new domain name using Lightsail. You must register a domain name using Amazon Route 53 or another domain name registrar. If you have already registered your domain, you can enter its name in this parameter to manage the DNS records for that domain.</p> </note>"
        }
      }
    },
    "CreateDomainResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the domain resource you created.</p>"
        }
      }
    },
    "CreateInstanceSnapshotRequest":{
      "type":"structure",
      "required":[
        "instanceSnapshotName",
        "instanceName"
      ],
      "members":{
        "instanceSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name for your new snapshot.</p>"
        },
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The Lightsail instance on which to base your snapshot.</p>"
        }
      }
    },
    "CreateInstanceSnapshotResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your create instances snapshot request.</p>"
        }
      }
    },
    "CreateInstancesFromSnapshotRequest":{
      "type":"structure",
      "required":[
        "instanceNames",
        "availabilityZone",
        "instanceSnapshotName",
        "bundleId"
      ],
      "members":{
        "instanceNames":{
          "shape":"StringList",
          "documentation":"<p>The names for your new instances.</p>"
        },
        "attachedDiskMapping":{
          "shape":"AttachedDiskMap",
          "documentation":"<p>An object containing information about one or more disk mappings.</p>"
        },
        "availabilityZone":{
          "shape":"string",
          "documentation":"<p>The Availability Zone where you want to create your instances. Use the following formatting: <code>us-east-2a</code> (case sensitive). You can get a list of availability zones by using the <a href=\"http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html\">get regions</a> operation. Be sure to add the <code>include availability zones</code> parameter to your request.</p>"
        },
        "instanceSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance snapshot on which you are basing your new instances. Use the get instance snapshots operation to return information about your existing snapshots.</p>"
        },
        "bundleId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The bundle of specification information for your virtual private server (or <i>instance</i>), including the pricing plan (e.g., <code>micro_1_0</code>).</p>"
        },
        "userData":{
          "shape":"string",
          "documentation":"<p>You can create a launch script that configures a server with additional user data. For example, <code>apt-get -y update</code>.</p> <note> <p>Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the <a href=\"http://lightsail.aws.amazon.com/ls/docs/getting-started/articles/pre-installed-apps\">Dev Guide</a>.</p> </note>"
        },
        "keyPairName":{
          "shape":"ResourceName",
          "documentation":"<p>The name for your key pair.</p>"
        }
      }
    },
    "CreateInstancesFromSnapshotResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your create instances from snapshot request.</p>"
        }
      }
    },
    "CreateInstancesRequest":{
      "type":"structure",
      "required":[
        "instanceNames",
        "availabilityZone",
        "blueprintId",
        "bundleId"
      ],
      "members":{
        "instanceNames":{
          "shape":"StringList",
          "documentation":"<p>The names to use for your new Lightsail instances. Separate multiple values using quotation marks and commas, for example: <code>[\"MyFirstInstance\",\"MySecondInstance\"]</code> </p>"
        },
        "availabilityZone":{
          "shape":"string",
          "documentation":"<p>The Availability Zone in which to create your instance. Use the following format: <code>us-east-2a</code> (case sensitive). You can get a list of availability zones by using the <a href=\"http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetRegions.html\">get regions</a> operation. Be sure to add the <code>include availability zones</code> parameter to your request.</p>"
        },
        "customImageName":{
          "shape":"ResourceName",
          "documentation":"<p>(Deprecated) The name for your custom image.</p> <note> <p>In releases prior to June 12, 2017, this parameter was ignored by the API. It is now deprecated.</p> </note>",
          "deprecated":true
        },
        "blueprintId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID for a virtual private server image (e.g., <code>app_wordpress_4_4</code> or <code>app_lamp_7_0</code>). Use the get blueprints operation to return a list of available images (or <i>blueprints</i>).</p>"
        },
        "bundleId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The bundle of specification information for your virtual private server (or <i>instance</i>), including the pricing plan (e.g., <code>micro_1_0</code>).</p>"
        },
        "userData":{
          "shape":"string",
          "documentation":"<p>A launch script you can create that configures a server with additional user data. For example, you might want to run <code>apt-get -y update</code>.</p> <note> <p>Depending on the machine image you choose, the command to get software on your instance varies. Amazon Linux and CentOS use <code>yum</code>, Debian and Ubuntu use <code>apt-get</code>, and FreeBSD uses <code>pkg</code>. For a complete list, see the <a href=\"https://lightsail.aws.amazon.com/ls/docs/getting-started/article/compare-options-choose-lightsail-instance-image\">Dev Guide</a>.</p> </note>"
        },
        "keyPairName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of your key pair.</p>"
        }
      }
    },
    "CreateInstancesResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your create instances request.</p>"
        }
      }
    },
    "CreateKeyPairRequest":{
      "type":"structure",
      "required":["keyPairName"],
      "members":{
        "keyPairName":{
          "shape":"ResourceName",
          "documentation":"<p>The name for your new key pair.</p>"
        }
      }
    },
    "CreateKeyPairResult":{
      "type":"structure",
      "members":{
        "keyPair":{
          "shape":"KeyPair",
          "documentation":"<p>An array of key-value pairs containing information about the new key pair you just created.</p>"
        },
        "publicKeyBase64":{
          "shape":"Base64",
          "documentation":"<p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>"
        },
        "privateKeyBase64":{
          "shape":"Base64",
          "documentation":"<p>A base64-encoded RSA private key.</p>"
        },
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the results of your create key pair request.</p>"
        }
      }
    },
    "CreateLoadBalancerRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "instancePort"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of your load balancer.</p>"
        },
        "instancePort":{
          "shape":"Port",
          "documentation":"<p>The instance port where you're creating your load balancer.</p>"
        },
        "healthCheckPath":{
          "shape":"string",
          "documentation":"<p>The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., <code>\"/\"</code>).</p> <p>You may want to specify a custom health check path other than the root of your application if your home page loads slowly or has a lot of media or scripting on it.</p>"
        },
        "certificateName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the SSL/TLS certificate.</p> <p>If you specify <code>certificateName</code>, then <code>certificateDomainName</code> is required (and vice-versa).</p>"
        },
        "certificateDomainName":{
          "shape":"DomainName",
          "documentation":"<p>The domain name with which your certificate is associated (e.g., <code>example.com</code>).</p> <p>If you specify <code>certificateDomainName</code>, then <code>certificateName</code> is required (and vice-versa).</p>"
        },
        "certificateAlternativeNames":{
          "shape":"DomainNameList",
          "documentation":"<p>The optional alternative domains and subdomains to use with your SSL/TLS certificate (e.g., <code>www.example.com</code>, <code>example.com</code>, <code>m.example.com</code>, <code>blog.example.com</code>).</p>"
        }
      }
    },
    "CreateLoadBalancerResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object containing information about the API operations.</p>"
        }
      }
    },
    "CreateLoadBalancerTlsCertificateRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "certificateName",
        "certificateDomainName"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The load balancer name where you want to create the SSL/TLS certificate.</p>"
        },
        "certificateName":{
          "shape":"ResourceName",
          "documentation":"<p>The SSL/TLS certificate name.</p> <p>You can have up to 10 certificates in your account at one time. Each Lightsail load balancer can have up to 2 certificates associated with it at one time. There is also an overall limit to the number of certificates that can be issue in a 365-day period. For more information, see <a href=\"http://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html\">Limits</a>.</p>"
        },
        "certificateDomainName":{
          "shape":"DomainName",
          "documentation":"<p>The domain name (e.g., <code>example.com</code>) for your SSL/TLS certificate.</p>"
        },
        "certificateAlternativeNames":{
          "shape":"DomainNameList",
          "documentation":"<p>An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. Lightsail will de-dupe the names for you. You can have a maximum of 9 alternative names (in addition to the 1 primary domain). We do not support wildcards (e.g., <code>*.example.com</code>).</p>"
        }
      }
    },
    "CreateLoadBalancerTlsCertificateResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object containing information about the API operations.</p>"
        }
      }
    },
    "DeleteDiskRequest":{
      "type":"structure",
      "required":["diskName"],
      "members":{
        "diskName":{
          "shape":"ResourceName",
          "documentation":"<p>The unique name of the disk you want to delete (e.g., <code>my-disk</code>).</p>"
        }
      }
    },
    "DeleteDiskResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "DeleteDiskSnapshotRequest":{
      "type":"structure",
      "required":["diskSnapshotName"],
      "members":{
        "diskSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the disk snapshot you want to delete (e.g., <code>my-disk-snapshot</code>).</p>"
        }
      }
    },
    "DeleteDiskSnapshotResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "DeleteDomainEntryRequest":{
      "type":"structure",
      "required":[
        "domainName",
        "domainEntry"
      ],
      "members":{
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain entry to delete.</p>"
        },
        "domainEntry":{
          "shape":"DomainEntry",
          "documentation":"<p>An array of key-value pairs containing information about your domain entries.</p>"
        }
      }
    },
    "DeleteDomainEntryResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the results of your delete domain entry request.</p>"
        }
      }
    },
    "DeleteDomainRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The specific domain name to delete.</p>"
        }
      }
    },
    "DeleteDomainResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the results of your delete domain request.</p>"
        }
      }
    },
    "DeleteInstanceRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance to delete.</p>"
        }
      }
    },
    "DeleteInstanceResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your delete instance request.</p>"
        }
      }
    },
    "DeleteInstanceSnapshotRequest":{
      "type":"structure",
      "required":["instanceSnapshotName"],
      "members":{
        "instanceSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the snapshot to delete.</p>"
        }
      }
    },
    "DeleteInstanceSnapshotResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your delete instance snapshot request.</p>"
        }
      }
    },
    "DeleteKeyPairRequest":{
      "type":"structure",
      "required":["keyPairName"],
      "members":{
        "keyPairName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the key pair to delete.</p>"
        }
      }
    },
    "DeleteKeyPairResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the results of your delete key pair request.</p>"
        }
      }
    },
    "DeleteLoadBalancerRequest":{
      "type":"structure",
      "required":["loadBalancerName"],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer you want to delete.</p>"
        }
      }
    },
    "DeleteLoadBalancerResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "DeleteLoadBalancerTlsCertificateRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "certificateName"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The load balancer name.</p>"
        },
        "certificateName":{
          "shape":"ResourceName",
          "documentation":"<p>The SSL/TLS certificate name.</p>"
        },
        "force":{
          "shape":"boolean",
          "documentation":"<p>When <code>true</code>, forces the deletion of an SSL/TLS certificate.</p> <p>There can be two certificates associated with a Lightsail load balancer: the primary and the backup. The force parameter is required when the primary SSL/TLS certificate is in use by an instance attached to the load balancer.</p>"
        }
      }
    },
    "DeleteLoadBalancerTlsCertificateResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "DetachDiskRequest":{
      "type":"structure",
      "required":["diskName"],
      "members":{
        "diskName":{
          "shape":"ResourceName",
          "documentation":"<p>The unique name of the disk you want to detach from your instance (e.g., <code>my-disk</code>).</p>"
        }
      }
    },
    "DetachDiskResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "DetachInstancesFromLoadBalancerRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "instanceNames"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the Lightsail load balancer.</p>"
        },
        "instanceNames":{
          "shape":"ResourceNameList",
          "documentation":"<p>An array of strings containing the names of the instances you want to detach from the load balancer.</p>"
        }
      }
    },
    "DetachInstancesFromLoadBalancerResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "DetachStaticIpRequest":{
      "type":"structure",
      "required":["staticIpName"],
      "members":{
        "staticIpName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the static IP to detach from the instance.</p>"
        }
      }
    },
    "DetachStaticIpResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your detach static IP request.</p>"
        }
      }
    },
    "Disk":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The unique name of the disk.</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the disk.</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The date when the disk was created.</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The AWS Region and Availability Zone where the disk is located.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The Lightsail resource type (e.g., <code>Disk</code>).</p>"
        },
        "sizeInGb":{
          "shape":"integer",
          "documentation":"<p>The size of the disk in GB.</p>"
        },
        "isSystemDisk":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).</p>"
        },
        "iops":{
          "shape":"integer",
          "documentation":"<p>The input/output operations per second (IOPS) of the disk.</p>"
        },
        "path":{
          "shape":"string",
          "documentation":"<p>The disk path.</p>"
        },
        "state":{
          "shape":"DiskState",
          "documentation":"<p>Describes the status of the disk.</p>"
        },
        "attachedTo":{
          "shape":"ResourceName",
          "documentation":"<p>The resources to which the disk is attached.</p>"
        },
        "isAttached":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether the disk is attached.</p>"
        },
        "attachmentState":{
          "shape":"string",
          "documentation":"<p>(Deprecated) The attachment state of the disk.</p> <note> <p>In releases prior to November 14, 2017, this parameter returned <code>attached</code> for system disks in the API response. It is now deprecated, but still included in the response. Use <code>isAttached</code> instead.</p> </note>",
          "deprecated":true
        },
        "gbInUse":{
          "shape":"integer",
          "documentation":"<p>(Deprecated) The number of GB in use by the disk.</p> <note> <p>In releases prior to November 14, 2017, this parameter was not included in the API response. It is now deprecated.</p> </note>",
          "deprecated":true
        }
      },
      "documentation":"<p>Describes a system disk or an block storage disk.</p>"
    },
    "DiskList":{
      "type":"list",
      "member":{"shape":"Disk"}
    },
    "DiskMap":{
      "type":"structure",
      "members":{
        "originalDiskPath":{
          "shape":"NonEmptyString",
          "documentation":"<p>The original disk path exposed to the instance (for example, <code>/dev/sdh</code>).</p>"
        },
        "newDiskName":{
          "shape":"ResourceName",
          "documentation":"<p>The new disk name (e.g., <code>my-new-disk</code>).</p>"
        }
      },
      "documentation":"<p>Describes a block storage disk mapping.</p>"
    },
    "DiskMapList":{
      "type":"list",
      "member":{"shape":"DiskMap"}
    },
    "DiskSnapshot":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the disk snapshot.</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The date when the disk snapshot was created.</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The AWS Region and Availability Zone where the disk snapshot was created.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The Lightsail resource type (e.g., <code>DiskSnapshot</code>).</p>"
        },
        "sizeInGb":{
          "shape":"integer",
          "documentation":"<p>The size of the disk in GB.</p>"
        },
        "state":{
          "shape":"DiskSnapshotState",
          "documentation":"<p>The status of the disk snapshot operation.</p>"
        },
        "progress":{
          "shape":"string",
          "documentation":"<p>The progress of the disk snapshot operation.</p>"
        },
        "fromDiskName":{
          "shape":"ResourceName",
          "documentation":"<p>The unique name of the source disk from which you are creating the disk snapshot.</p>"
        },
        "fromDiskArn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the source disk from which you are creating the disk snapshot.</p>"
        }
      },
      "documentation":"<p>Describes a block storage disk snapshot.</p>"
    },
    "DiskSnapshotList":{
      "type":"list",
      "member":{"shape":"DiskSnapshot"}
    },
    "DiskSnapshotState":{
      "type":"string",
      "enum":[
        "pending",
        "completed",
        "error",
        "unknown"
      ]
    },
    "DiskState":{
      "type":"string",
      "enum":[
        "pending",
        "error",
        "available",
        "in-use",
        "unknown"
      ]
    },
    "Domain":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the domain.</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the domain recordset (e.g., <code>arn:aws:lightsail:global:123456789101:Domain/824cede0-abc7-4f84-8dbc-12345EXAMPLE</code>).</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The date when the domain recordset was created.</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The AWS Region and Availability Zones where the domain recordset was created.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type. </p>"
        },
        "domainEntries":{
          "shape":"DomainEntryList",
          "documentation":"<p>An array of key-value pairs containing information about the domain entries.</p>"
        }
      },
      "documentation":"<p>Describes a domain where you are storing recordsets in Lightsail.</p>"
    },
    "DomainEntry":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the domain recordset entry.</p>"
        },
        "name":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain.</p>"
        },
        "target":{
          "shape":"string",
          "documentation":"<p>The target AWS name server (e.g., <code>ns-111.awsdns-22.com.</code>).</p> <p>For Lightsail load balancers, the value looks like <code>ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com</code>. Be sure to also set <code>isAlias</code> to <code>true</code> when setting up an A record for a load balancer.</p>"
        },
        "isAlias":{
          "shape":"boolean",
          "documentation":"<p>When <code>true</code>, specifies whether the domain entry is an alias used by the Lightsail load balancer. You can include an alias (A type) record in your request, which points to a load balancer DNS name and routes traffic to your load balancer</p>"
        },
        "type":{
          "shape":"DomainEntryType",
          "documentation":"<p>The type of domain entry (e.g., <code>SOA</code> or <code>NS</code>).</p>"
        },
        "options":{
          "shape":"DomainEntryOptions",
          "documentation":"<p>(Deprecated) The options for the domain entry.</p> <note> <p>In releases prior to November 29, 2017, this parameter was not included in the API response. It is now deprecated.</p> </note>",
          "deprecated":true
        }
      },
      "documentation":"<p>Describes a domain recordset entry.</p>"
    },
    "DomainEntryList":{
      "type":"list",
      "member":{"shape":"DomainEntry"}
    },
    "DomainEntryOptions":{
      "type":"map",
      "key":{"shape":"DomainEntryOptionsKeys"},
      "value":{"shape":"string"}
    },
    "DomainEntryOptionsKeys":{"type":"string"},
    "DomainEntryType":{"type":"string"},
    "DomainList":{
      "type":"list",
      "member":{"shape":"Domain"}
    },
    "DomainName":{"type":"string"},
    "DomainNameList":{
      "type":"list",
      "member":{"shape":"DomainName"}
    },
    "DownloadDefaultKeyPairRequest":{
      "type":"structure",
      "members":{
      }
    },
    "DownloadDefaultKeyPairResult":{
      "type":"structure",
      "members":{
        "publicKeyBase64":{
          "shape":"Base64",
          "documentation":"<p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>"
        },
        "privateKeyBase64":{
          "shape":"Base64",
          "documentation":"<p>A base64-encoded RSA private key.</p>"
        }
      }
    },
    "GetActiveNamesRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for paginating results from your get active names request.</p>"
        }
      }
    },
    "GetActiveNamesResult":{
      "type":"structure",
      "members":{
        "activeNames":{
          "shape":"StringList",
          "documentation":"<p>The list of active names returned by the get active names request.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get active names request.</p>"
        }
      }
    },
    "GetBlueprintsRequest":{
      "type":"structure",
      "members":{
        "includeInactive":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether to include inactive results in your request.</p>"
        },
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get blueprints request.</p>"
        }
      }
    },
    "GetBlueprintsResult":{
      "type":"structure",
      "members":{
        "blueprints":{
          "shape":"BlueprintList",
          "documentation":"<p>An array of key-value pairs that contains information about the available blueprints.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get blueprints request.</p>"
        }
      }
    },
    "GetBundlesRequest":{
      "type":"structure",
      "members":{
        "includeInactive":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value that indicates whether to include inactive bundle results in your request.</p>"
        },
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get bundles request.</p>"
        }
      }
    },
    "GetBundlesResult":{
      "type":"structure",
      "members":{
        "bundles":{
          "shape":"BundleList",
          "documentation":"<p>An array of key-value pairs that contains information about the available bundles.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get active names request.</p>"
        }
      }
    },
    "GetDiskRequest":{
      "type":"structure",
      "required":["diskName"],
      "members":{
        "diskName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the disk (e.g., <code>my-disk</code>).</p>"
        }
      }
    },
    "GetDiskResult":{
      "type":"structure",
      "members":{
        "disk":{
          "shape":"Disk",
          "documentation":"<p>An object containing information about the disk.</p>"
        }
      }
    },
    "GetDiskSnapshotRequest":{
      "type":"structure",
      "required":["diskSnapshotName"],
      "members":{
        "diskSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the disk snapshot (e.g., <code>my-disk-snapshot</code>).</p>"
        }
      }
    },
    "GetDiskSnapshotResult":{
      "type":"structure",
      "members":{
        "diskSnapshot":{
          "shape":"DiskSnapshot",
          "documentation":"<p>An object containing information about the disk snapshot.</p>"
        }
      }
    },
    "GetDiskSnapshotsRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your GetDiskSnapshots request.</p>"
        }
      }
    },
    "GetDiskSnapshotsResult":{
      "type":"structure",
      "members":{
        "diskSnapshots":{
          "shape":"DiskSnapshotList",
          "documentation":"<p>An array of objects containing information about all block storage disk snapshots.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your GetDiskSnapshots request.</p>"
        }
      }
    },
    "GetDisksRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your GetDisks request.</p>"
        }
      }
    },
    "GetDisksResult":{
      "type":"structure",
      "members":{
        "disks":{
          "shape":"DiskList",
          "documentation":"<p>An array of objects containing information about all block storage disks.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your GetDisks request.</p>"
        }
      }
    },
    "GetDomainRequest":{
      "type":"structure",
      "required":["domainName"],
      "members":{
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The domain name for which your want to return information about.</p>"
        }
      }
    },
    "GetDomainResult":{
      "type":"structure",
      "members":{
        "domain":{
          "shape":"Domain",
          "documentation":"<p>An array of key-value pairs containing information about your get domain request.</p>"
        }
      }
    },
    "GetDomainsRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get domains request.</p>"
        }
      }
    },
    "GetDomainsResult":{
      "type":"structure",
      "members":{
        "domains":{
          "shape":"DomainList",
          "documentation":"<p>An array of key-value pairs containing information about each of the domain entries in the user's account.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get active names request.</p>"
        }
      }
    },
    "GetInstanceAccessDetailsRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance to access.</p>"
        },
        "protocol":{
          "shape":"InstanceAccessProtocol",
          "documentation":"<p>The protocol to use to connect to your instance. Defaults to <code>ssh</code>.</p>"
        }
      }
    },
    "GetInstanceAccessDetailsResult":{
      "type":"structure",
      "members":{
        "accessDetails":{
          "shape":"InstanceAccessDetails",
          "documentation":"<p>An array of key-value pairs containing information about a get instance access request.</p>"
        }
      }
    },
    "GetInstanceMetricDataRequest":{
      "type":"structure",
      "required":[
        "instanceName",
        "metricName",
        "period",
        "startTime",
        "endTime",
        "unit",
        "statistics"
      ],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance for which you want to get metrics data.</p>"
        },
        "metricName":{
          "shape":"InstanceMetricName",
          "documentation":"<p>The metric name to get data about. </p>"
        },
        "period":{
          "shape":"MetricPeriod",
          "documentation":"<p>The time period for which you are requesting data.</p>"
        },
        "startTime":{
          "shape":"timestamp",
          "documentation":"<p>The start time of the time period.</p>"
        },
        "endTime":{
          "shape":"timestamp",
          "documentation":"<p>The end time of the time period.</p>"
        },
        "unit":{
          "shape":"MetricUnit",
          "documentation":"<p>The unit. The list of valid values is below.</p>"
        },
        "statistics":{
          "shape":"MetricStatisticList",
          "documentation":"<p>The instance statistics. </p>"
        }
      }
    },
    "GetInstanceMetricDataResult":{
      "type":"structure",
      "members":{
        "metricName":{
          "shape":"InstanceMetricName",
          "documentation":"<p>The metric name to return data for.</p>"
        },
        "metricData":{
          "shape":"MetricDatapointList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your get instance metric data request.</p>"
        }
      }
    },
    "GetInstancePortStatesRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance.</p>"
        }
      }
    },
    "GetInstancePortStatesResult":{
      "type":"structure",
      "members":{
        "portStates":{
          "shape":"InstancePortStateList",
          "documentation":"<p>Information about the port states resulting from your request.</p>"
        }
      }
    },
    "GetInstanceRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance.</p>"
        }
      }
    },
    "GetInstanceResult":{
      "type":"structure",
      "members":{
        "instance":{
          "shape":"Instance",
          "documentation":"<p>An array of key-value pairs containing information about the specified instance.</p>"
        }
      }
    },
    "GetInstanceSnapshotRequest":{
      "type":"structure",
      "required":["instanceSnapshotName"],
      "members":{
        "instanceSnapshotName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the snapshot for which you are requesting information.</p>"
        }
      }
    },
    "GetInstanceSnapshotResult":{
      "type":"structure",
      "members":{
        "instanceSnapshot":{
          "shape":"InstanceSnapshot",
          "documentation":"<p>An array of key-value pairs containing information about the results of your get instance snapshot request.</p>"
        }
      }
    },
    "GetInstanceSnapshotsRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get instance snapshots request.</p>"
        }
      }
    },
    "GetInstanceSnapshotsResult":{
      "type":"structure",
      "members":{
        "instanceSnapshots":{
          "shape":"InstanceSnapshotList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your get instance snapshots request.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get instance snapshots request.</p>"
        }
      }
    },
    "GetInstanceStateRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance to get state information about.</p>"
        }
      }
    },
    "GetInstanceStateResult":{
      "type":"structure",
      "members":{
        "state":{
          "shape":"InstanceState",
          "documentation":"<p>The state of the instance.</p>"
        }
      }
    },
    "GetInstancesRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get instances request.</p>"
        }
      }
    },
    "GetInstancesResult":{
      "type":"structure",
      "members":{
        "instances":{
          "shape":"InstanceList",
          "documentation":"<p>An array of key-value pairs containing information about your instances.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get instances request.</p>"
        }
      }
    },
    "GetKeyPairRequest":{
      "type":"structure",
      "required":["keyPairName"],
      "members":{
        "keyPairName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the key pair for which you are requesting information.</p>"
        }
      }
    },
    "GetKeyPairResult":{
      "type":"structure",
      "members":{
        "keyPair":{
          "shape":"KeyPair",
          "documentation":"<p>An array of key-value pairs containing information about the key pair.</p>"
        }
      }
    },
    "GetKeyPairsRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get key pairs request.</p>"
        }
      }
    },
    "GetKeyPairsResult":{
      "type":"structure",
      "members":{
        "keyPairs":{
          "shape":"KeyPairList",
          "documentation":"<p>An array of key-value pairs containing information about the key pairs.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get key pairs request.</p>"
        }
      }
    },
    "GetLoadBalancerMetricDataRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "metricName",
        "period",
        "startTime",
        "endTime",
        "unit",
        "statistics"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer.</p>"
        },
        "metricName":{
          "shape":"LoadBalancerMetricName",
          "documentation":"<p>The metric about which you want to return information. Valid values are listed below, along with the most useful <code>statistics</code> to include in your request.</p> <ul> <li> <p> <b> <code>ClientTLSNegotiationErrorCount</code> </b> - The number of TLS connections initiated by the client that did not establish a session with the load balancer. Possible causes include a mismatch of ciphers or protocols.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> </li> <li> <p> <b> <code>HealthyHostCount</code> </b> - The number of target instances that are considered healthy.</p> <p> <code>Statistics</code>: The most useful statistic are <code>Average</code>, <code>Minimum</code>, and <code>Maximum</code>.</p> </li> <li> <p> <b> <code>UnhealthyHostCount</code> </b> - The number of target instances that are considered unhealthy.</p> <p> <code>Statistics</code>: The most useful statistic are <code>Average</code>, <code>Minimum</code>, and <code>Maximum</code>.</p> </li> <li> <p> <b> <code>HTTPCode_LB_4XX_Count</code> </b> - The number of HTTP 4XX client error codes that originate from the load balancer. Client errors are generated when requests are malformed or incomplete. These requests have not been received by the target instance. This count does not include any response codes generated by the target instances.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_LB_5XX_Count</code> </b> - The number of HTTP 5XX server error codes that originate from the load balancer. This count does not include any response codes generated by the target instances.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_2XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_3XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer. </p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_4XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_5XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>InstanceResponseTime</code> </b> - The time elapsed, in seconds, after the request leaves the load balancer until a response from the target instance is received.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> </li> <li> <p> <b> <code>RejectedConnectionCount</code> </b> - The number of connections that were rejected because the load balancer had reached its maximum number of connections.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> </li> <li> <p> <b> <code>RequestCount</code> </b> - The number of requests processed over IPv4. This count includes only the requests with a response generated by a target instance of the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> </ul>"
        },
        "period":{
          "shape":"MetricPeriod",
          "documentation":"<p>The time period duration for your health data request.</p>"
        },
        "startTime":{
          "shape":"timestamp",
          "documentation":"<p>The start time of the period.</p>"
        },
        "endTime":{
          "shape":"timestamp",
          "documentation":"<p>The end time of the period.</p>"
        },
        "unit":{
          "shape":"MetricUnit",
          "documentation":"<p>The unit for the time period request. Valid values are listed below.</p>"
        },
        "statistics":{
          "shape":"MetricStatisticList",
          "documentation":"<p>An array of statistics that you want to request metrics for. Valid values are listed below.</p> <ul> <li> <p> <b> <code>SampleCount</code> </b> - The count (number) of data points used for the statistical calculation.</p> </li> <li> <p> <b> <code>Average</code> </b> - The value of Sum / SampleCount during the specified period. By comparing this statistic with the Minimum and Maximum, you can determine the full scope of a metric and how close the average use is to the Minimum and Maximum. This comparison helps you to know when to increase or decrease your resources as needed.</p> </li> <li> <p> <b> <code>Sum</code> </b> - All values submitted for the matching metric added together. This statistic can be useful for determining the total volume of a metric.</p> </li> <li> <p> <b> <code>Minimum</code> </b> - The lowest value observed during the specified period. You can use this value to determine low volumes of activity for your application.</p> </li> <li> <p> <b> <code>Maximum</code> </b> - The highest value observed during the specified period. You can use this value to determine high volumes of activity for your application.</p> </li> </ul>"
        }
      }
    },
    "GetLoadBalancerMetricDataResult":{
      "type":"structure",
      "members":{
        "metricName":{
          "shape":"LoadBalancerMetricName",
          "documentation":"<p>The metric about which you are receiving information. Valid values are listed below, along with the most useful <code>statistics</code> to include in your request.</p> <ul> <li> <p> <b> <code>ClientTLSNegotiationErrorCount</code> </b> - The number of TLS connections initiated by the client that did not establish a session with the load balancer. Possible causes include a mismatch of ciphers or protocols.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> </li> <li> <p> <b> <code>HealthyHostCount</code> </b> - The number of target instances that are considered healthy.</p> <p> <code>Statistics</code>: The most useful statistic are <code>Average</code>, <code>Minimum</code>, and <code>Maximum</code>.</p> </li> <li> <p> <b> <code>UnhealthyHostCount</code> </b> - The number of target instances that are considered unhealthy.</p> <p> <code>Statistics</code>: The most useful statistic are <code>Average</code>, <code>Minimum</code>, and <code>Maximum</code>.</p> </li> <li> <p> <b> <code>HTTPCode_LB_4XX_Count</code> </b> - The number of HTTP 4XX client error codes that originate from the load balancer. Client errors are generated when requests are malformed or incomplete. These requests have not been received by the target instance. This count does not include any response codes generated by the target instances.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_LB_5XX_Count</code> </b> - The number of HTTP 5XX server error codes that originate from the load balancer. This count does not include any response codes generated by the target instances.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_2XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_3XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer. </p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_4XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>HTTPCode_Instance_5XX_Count</code> </b> - The number of HTTP response codes generated by the target instances. This does not include any response codes generated by the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> <li> <p> <b> <code>InstanceResponseTime</code> </b> - The time elapsed, in seconds, after the request leaves the load balancer until a response from the target instance is received.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Average</code>.</p> </li> <li> <p> <b> <code>RejectedConnectionCount</code> </b> - The number of connections that were rejected because the load balancer had reached its maximum number of connections.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>.</p> </li> <li> <p> <b> <code>RequestCount</code> </b> - The number of requests processed over IPv4. This count includes only the requests with a response generated by a target instance of the load balancer.</p> <p> <code>Statistics</code>: The most useful statistic is <code>Sum</code>. Note that <code>Minimum</code>, <code>Maximum</code>, and <code>Average</code> all return <code>1</code>.</p> </li> </ul>"
        },
        "metricData":{
          "shape":"MetricDatapointList",
          "documentation":"<p>An array of metric datapoint objects.</p>"
        }
      }
    },
    "GetLoadBalancerRequest":{
      "type":"structure",
      "required":["loadBalancerName"],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer.</p>"
        }
      }
    },
    "GetLoadBalancerResult":{
      "type":"structure",
      "members":{
        "loadBalancer":{
          "shape":"LoadBalancer",
          "documentation":"<p>An object containing information about your load balancer.</p>"
        }
      }
    },
    "GetLoadBalancerTlsCertificatesRequest":{
      "type":"structure",
      "required":["loadBalancerName"],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer you associated with your SSL/TLS certificate.</p>"
        }
      }
    },
    "GetLoadBalancerTlsCertificatesResult":{
      "type":"structure",
      "members":{
        "tlsCertificates":{
          "shape":"LoadBalancerTlsCertificateList",
          "documentation":"<p>An array of LoadBalancerTlsCertificate objects describing your SSL/TLS certificates.</p>"
        }
      }
    },
    "GetLoadBalancersRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for paginating the results from your GetLoadBalancers request.</p>"
        }
      }
    },
    "GetLoadBalancersResult":{
      "type":"structure",
      "members":{
        "loadBalancers":{
          "shape":"LoadBalancerList",
          "documentation":"<p>An array of LoadBalancer objects describing your load balancers.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your GetLoadBalancers request.</p>"
        }
      }
    },
    "GetOperationRequest":{
      "type":"structure",
      "required":["operationId"],
      "members":{
        "operationId":{
          "shape":"NonEmptyString",
          "documentation":"<p>A GUID used to identify the operation.</p>"
        }
      }
    },
    "GetOperationResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the results of your get operation request.</p>"
        }
      }
    },
    "GetOperationsForResourceRequest":{
      "type":"structure",
      "required":["resourceName"],
      "members":{
        "resourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the resource for which you are requesting information.</p>"
        },
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get operations for resource request.</p>"
        }
      }
    },
    "GetOperationsForResourceResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your get operations for resource request.</p>"
        },
        "nextPageCount":{
          "shape":"string",
          "documentation":"<p>(Deprecated) Returns the number of pages of results that remain.</p> <note> <p>In releases prior to June 12, 2017, this parameter returned <code>null</code> by the API. It is now deprecated, and the API returns the <code>nextPageToken</code> parameter instead.</p> </note>",
          "deprecated":true
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>"
        }
      }
    },
    "GetOperationsRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get operations request.</p>"
        }
      }
    },
    "GetOperationsResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the results of your get operations request.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get operations request.</p>"
        }
      }
    },
    "GetRegionsRequest":{
      "type":"structure",
      "members":{
        "includeAvailabilityZones":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether to also include Availability Zones in your get regions request. Availability Zones are indicated with a letter: e.g., <code>us-east-2a</code>.</p>"
        }
      }
    },
    "GetRegionsResult":{
      "type":"structure",
      "members":{
        "regions":{
          "shape":"RegionList",
          "documentation":"<p>An array of key-value pairs containing information about your get regions request.</p>"
        }
      }
    },
    "GetStaticIpRequest":{
      "type":"structure",
      "required":["staticIpName"],
      "members":{
        "staticIpName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the static IP in Lightsail.</p>"
        }
      }
    },
    "GetStaticIpResult":{
      "type":"structure",
      "members":{
        "staticIp":{
          "shape":"StaticIp",
          "documentation":"<p>An array of key-value pairs containing information about the requested static IP.</p>"
        }
      }
    },
    "GetStaticIpsRequest":{
      "type":"structure",
      "members":{
        "pageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get static IPs request.</p>"
        }
      }
    },
    "GetStaticIpsResult":{
      "type":"structure",
      "members":{
        "staticIps":{
          "shape":"StaticIpList",
          "documentation":"<p>An array of key-value pairs containing information about your get static IPs request.</p>"
        },
        "nextPageToken":{
          "shape":"string",
          "documentation":"<p>A token used for advancing to the next page of results from your get static IPs request.</p>"
        }
      }
    },
    "ImportKeyPairRequest":{
      "type":"structure",
      "required":[
        "keyPairName",
        "publicKeyBase64"
      ],
      "members":{
        "keyPairName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the key pair for which you want to import the public key.</p>"
        },
        "publicKeyBase64":{
          "shape":"Base64",
          "documentation":"<p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>"
        }
      }
    },
    "ImportKeyPairResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "Instance":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name the user gave the instance (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:Instance/244ad76f-8aad-4741-809f-12345EXAMPLE</code>).</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the instance was created (e.g., <code>1479734909.17</code>).</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The region name and availability zone where the instance is located.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of resource (usually <code>Instance</code>).</p>"
        },
        "blueprintId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The blueprint ID (e.g., <code>os_amlinux_2016_03</code>).</p>"
        },
        "blueprintName":{
          "shape":"NonEmptyString",
          "documentation":"<p>The friendly name of the blueprint (e.g., <code>Amazon Linux</code>).</p>"
        },
        "bundleId":{
          "shape":"NonEmptyString",
          "documentation":"<p>The bundle for the instance (e.g., <code>micro_1_0</code>).</p>"
        },
        "isStaticIp":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether this instance has a static IP assigned to it.</p>"
        },
        "privateIpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>The private IP address of the instance.</p>"
        },
        "publicIpAddress":{
          "shape":"IpAddress",
          "documentation":"<p>The public IP address of the instance.</p>"
        },
        "ipv6Address":{
          "shape":"IpV6Address",
          "documentation":"<p>The IPv6 address of the instance.</p>"
        },
        "hardware":{
          "shape":"InstanceHardware",
          "documentation":"<p>The size of the vCPU and the amount of RAM for the instance.</p>"
        },
        "networking":{
          "shape":"InstanceNetworking",
          "documentation":"<p>Information about the public ports and monthly data transfer rates for the instance.</p>"
        },
        "state":{
          "shape":"InstanceState",
          "documentation":"<p>The status code and the state (e.g., <code>running</code>) for the instance.</p>"
        },
        "username":{
          "shape":"NonEmptyString",
          "documentation":"<p>The user name for connecting to the instance (e.g., <code>ec2-user</code>).</p>"
        },
        "sshKeyName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the SSH key being used to connect to the instance (e.g., <code>LightsailDefaultKeyPair</code>).</p>"
        }
      },
      "documentation":"<p>Describes an instance (a virtual private server).</p>"
    },
    "InstanceAccessDetails":{
      "type":"structure",
      "members":{
        "certKey":{
          "shape":"string",
          "documentation":"<p>For SSH access, the public key to use when accessing your instance For OpenSSH clients (e.g., command line SSH), you should save this value to <code>tempkey-cert.pub</code>.</p>"
        },
        "expiresAt":{
          "shape":"IsoDate",
          "documentation":"<p>For SSH access, the date on which the temporary keys expire.</p>"
        },
        "ipAddress":{
          "shape":"IpAddress",
          "documentation":"<p>The public IP address of the Amazon Lightsail instance.</p>"
        },
        "password":{
          "shape":"string",
          "documentation":"<p>For RDP access, the password for your Amazon Lightsail instance. Password will be an empty string if the password for your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.</p> <note> <p>If you create an instance using any key pair other than the default (<code>LightsailDefaultKeyPair</code>), <code>password</code> will always be an empty string.</p> <p>If you change the Administrator password on the instance, Lightsail will continue to return the original password value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.</p> </note>"
        },
        "passwordData":{
          "shape":"PasswordData",
          "documentation":"<p>For a Windows Server-based instance, an object with the data you can use to retrieve your password. This is only needed if <code>password</code> is empty and the instance is not new (and therefore the password is not ready yet). When you create an instance, it can take up to 15 minutes for the instance to be ready.</p>"
        },
        "privateKey":{
          "shape":"string",
          "documentation":"<p>For SSH access, the temporary private key. For OpenSSH clients (e.g., command line SSH), you should save this value to <code>tempkey</code>).</p>"
        },
        "protocol":{
          "shape":"InstanceAccessProtocol",
          "documentation":"<p>The protocol for these Amazon Lightsail instance access details.</p>"
        },
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of this Amazon Lightsail instance.</p>"
        },
        "username":{
          "shape":"string",
          "documentation":"<p>The user name to use when logging in to the Amazon Lightsail instance.</p>"
        }
      },
      "documentation":"<p>The parameters for gaining temporary access to one of your Amazon Lightsail instances.</p>"
    },
    "InstanceAccessProtocol":{
      "type":"string",
      "enum":[
        "ssh",
        "rdp"
      ]
    },
    "InstanceHardware":{
      "type":"structure",
      "members":{
        "cpuCount":{
          "shape":"integer",
          "documentation":"<p>The number of vCPUs the instance has.</p>"
        },
        "disks":{
          "shape":"DiskList",
          "documentation":"<p>The disks attached to the instance.</p>"
        },
        "ramSizeInGb":{
          "shape":"float",
          "documentation":"<p>The amount of RAM in GB on the instance (e.g., <code>1.0</code>).</p>"
        }
      },
      "documentation":"<p>Describes the hardware for the instance.</p>"
    },
    "InstanceHealthReason":{
      "type":"string",
      "enum":[
        "Lb.RegistrationInProgress",
        "Lb.InitialHealthChecking",
        "Lb.InternalError",
        "Instance.ResponseCodeMismatch",
        "Instance.Timeout",
        "Instance.FailedHealthChecks",
        "Instance.NotRegistered",
        "Instance.NotInUse",
        "Instance.DeregistrationInProgress",
        "Instance.InvalidState",
        "Instance.IpUnusable"
      ]
    },
    "InstanceHealthState":{
      "type":"string",
      "enum":[
        "initial",
        "healthy",
        "unhealthy",
        "unused",
        "draining",
        "unavailable"
      ]
    },
    "InstanceHealthSummary":{
      "type":"structure",
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the Lightsail instance for which you are requesting health check data.</p>"
        },
        "instanceHealth":{
          "shape":"InstanceHealthState",
          "documentation":"<p>Describes the overall instance health. Valid values are below.</p>"
        },
        "instanceHealthReason":{
          "shape":"InstanceHealthReason",
          "documentation":"<p>More information about the instance health. If the <code>instanceHealth</code> is <code>healthy</code>, then an <code>instanceHealthReason</code> value is not provided.</p> <p>If <b> <code>instanceHealth</code> </b> is <code>initial</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Lb.RegistrationInProgress</code> </b> - The target instance is in the process of being registered with the load balancer.</p> </li> <li> <p> <b> <code>Lb.InitialHealthChecking</code> </b> - The Lightsail load balancer is still sending the target instance the minimum number of health checks required to determine its health status.</p> </li> </ul> <p>If <b> <code>instanceHealth</code> </b> is <code>unhealthy</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Instance.ResponseCodeMismatch</code> </b> - The health checks did not return an expected HTTP code.</p> </li> <li> <p> <b> <code>Instance.Timeout</code> </b> - The health check requests timed out.</p> </li> <li> <p> <b> <code>Instance.FailedHealthChecks</code> </b> - The health checks failed because the connection to the target instance timed out, the target instance response was malformed, or the target instance failed the health check for an unknown reason.</p> </li> <li> <p> <b> <code>Lb.InternalError</code> </b> - The health checks failed due to an internal error.</p> </li> </ul> <p>If <b> <code>instanceHealth</code> </b> is <code>unused</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Instance.NotRegistered</code> </b> - The target instance is not registered with the target group.</p> </li> <li> <p> <b> <code>Instance.NotInUse</code> </b> - The target group is not used by any load balancer, or the target instance is in an Availability Zone that is not enabled for its load balancer.</p> </li> <li> <p> <b> <code>Instance.IpUnusable</code> </b> - The target IP address is reserved for use by a Lightsail load balancer.</p> </li> <li> <p> <b> <code>Instance.InvalidState</code> </b> - The target is in the stopped or terminated state.</p> </li> </ul> <p>If <b> <code>instanceHealth</code> </b> is <code>draining</code>, the <b> <code>instanceHealthReason</code> </b> value can be one of the following:</p> <ul> <li> <p> <b> <code>Instance.DeregistrationInProgress</code> </b> - The target instance is in the process of being deregistered and the deregistration delay period has not expired.</p> </li> </ul>"
        }
      },
      "documentation":"<p>Describes information about the health of the instance.</p>"
    },
    "InstanceHealthSummaryList":{
      "type":"list",
      "member":{"shape":"InstanceHealthSummary"}
    },
    "InstanceList":{
      "type":"list",
      "member":{"shape":"Instance"}
    },
    "InstanceMetricName":{
      "type":"string",
      "enum":[
        "CPUUtilization",
        "NetworkIn",
        "NetworkOut",
        "StatusCheckFailed",
        "StatusCheckFailed_Instance",
        "StatusCheckFailed_System"
      ]
    },
    "InstanceNetworking":{
      "type":"structure",
      "members":{
        "monthlyTransfer":{
          "shape":"MonthlyTransfer",
          "documentation":"<p>The amount of data in GB allocated for monthly data transfers.</p>"
        },
        "ports":{
          "shape":"InstancePortInfoList",
          "documentation":"<p>An array of key-value pairs containing information about the ports on the instance.</p>"
        }
      },
      "documentation":"<p>Describes monthly data transfer rates and port information for an instance.</p>"
    },
    "InstancePlatform":{
      "type":"string",
      "enum":[
        "LINUX_UNIX",
        "WINDOWS"
      ]
    },
    "InstancePlatformList":{
      "type":"list",
      "member":{"shape":"InstancePlatform"}
    },
    "InstancePortInfo":{
      "type":"structure",
      "members":{
        "fromPort":{
          "shape":"Port",
          "documentation":"<p>The first port in the range.</p>"
        },
        "toPort":{
          "shape":"Port",
          "documentation":"<p>The last port in the range.</p>"
        },
        "protocol":{
          "shape":"NetworkProtocol",
          "documentation":"<p>The protocol being used. Can be one of the following.</p> <ul> <li> <p> <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.</p> </li> <li> <p> <code>all</code> - All transport layer protocol types. For more general information, see <a href=\"https://en.wikipedia.org/wiki/Transport_layer\">Transport layer</a> on Wikipedia.</p> </li> <li> <p> <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.</p> </li> </ul>"
        },
        "accessFrom":{
          "shape":"string",
          "documentation":"<p>The location from which access is allowed (e.g., <code>Anywhere (0.0.0.0/0)</code>).</p>"
        },
        "accessType":{
          "shape":"PortAccessType",
          "documentation":"<p>The type of access (<code>Public</code> or <code>Private</code>).</p>"
        },
        "commonName":{
          "shape":"string",
          "documentation":"<p>The common name.</p>"
        },
        "accessDirection":{
          "shape":"AccessDirection",
          "documentation":"<p>The access direction (<code>inbound</code> or <code>outbound</code>).</p>"
        }
      },
      "documentation":"<p>Describes information about the instance ports.</p>"
    },
    "InstancePortInfoList":{
      "type":"list",
      "member":{"shape":"InstancePortInfo"}
    },
    "InstancePortState":{
      "type":"structure",
      "members":{
        "fromPort":{
          "shape":"Port",
          "documentation":"<p>The first port in the range.</p>"
        },
        "toPort":{
          "shape":"Port",
          "documentation":"<p>The last port in the range.</p>"
        },
        "protocol":{
          "shape":"NetworkProtocol",
          "documentation":"<p>The protocol being used. Can be one of the following.</p> <ul> <li> <p> <code>tcp</code> - Transmission Control Protocol (TCP) provides reliable, ordered, and error-checked delivery of streamed data between applications running on hosts communicating by an IP network. If you have an application that doesn't require reliable data stream service, use UDP instead.</p> </li> <li> <p> <code>all</code> - All transport layer protocol types. For more general information, see <a href=\"https://en.wikipedia.org/wiki/Transport_layer\">Transport layer</a> on Wikipedia.</p> </li> <li> <p> <code>udp</code> - With User Datagram Protocol (UDP), computer applications can send messages (or datagrams) to other hosts on an Internet Protocol (IP) network. Prior communications are not required to set up transmission channels or data paths. Applications that don't require reliable data stream service can use UDP, which provides a connectionless datagram service that emphasizes reduced latency over reliability. If you do require reliable data stream service, use TCP instead.</p> </li> </ul>"
        },
        "state":{
          "shape":"PortState",
          "documentation":"<p>Specifies whether the instance port is <code>open</code> or <code>closed</code>.</p>"
        }
      },
      "documentation":"<p>Describes the port state.</p>"
    },
    "InstancePortStateList":{
      "type":"list",
      "member":{"shape":"InstancePortState"}
    },
    "InstanceSnapshot":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the snapshot.</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the snapshot (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:InstanceSnapshot/d23b5706-3322-4d83-81e5-12345EXAMPLE</code>).</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the snapshot was created (e.g., <code>1479907467.024</code>).</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The region name and availability zone where you created the snapshot.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The type of resource (usually <code>InstanceSnapshot</code>).</p>"
        },
        "state":{
          "shape":"InstanceSnapshotState",
          "documentation":"<p>The state the snapshot is in.</p>"
        },
        "progress":{
          "shape":"string",
          "documentation":"<p>The progress of the snapshot.</p>"
        },
        "fromAttachedDisks":{
          "shape":"DiskList",
          "documentation":"<p>An array of disk objects containing information about all block storage disks.</p>"
        },
        "fromInstanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The instance from which the snapshot was created.</p>"
        },
        "fromInstanceArn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the instance from which the snapshot was created (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:Instance/64b8404c-ccb1-430b-8daf-12345EXAMPLE</code>).</p>"
        },
        "fromBlueprintId":{
          "shape":"string",
          "documentation":"<p>The blueprint ID from which you created the snapshot (e.g., <code>os_debian_8_3</code>). A blueprint is a virtual private server (or <i>instance</i>) image used to create instances quickly.</p>"
        },
        "fromBundleId":{
          "shape":"string",
          "documentation":"<p>The bundle ID from which you created the snapshot (e.g., <code>micro_1_0</code>).</p>"
        },
        "sizeInGb":{
          "shape":"integer",
          "documentation":"<p>The size in GB of the SSD.</p>"
        }
      },
      "documentation":"<p>Describes the snapshot of the virtual private server, or <i>instance</i>.</p>"
    },
    "InstanceSnapshotList":{
      "type":"list",
      "member":{"shape":"InstanceSnapshot"}
    },
    "InstanceSnapshotState":{
      "type":"string",
      "enum":[
        "pending",
        "error",
        "available"
      ]
    },
    "InstanceState":{
      "type":"structure",
      "members":{
        "code":{
          "shape":"integer",
          "documentation":"<p>The status code for the instance.</p>"
        },
        "name":{
          "shape":"string",
          "documentation":"<p>The state of the instance (e.g., <code>running</code> or <code>pending</code>).</p>"
        }
      },
      "documentation":"<p>Describes the virtual private server (or <i>instance</i>) status.</p>"
    },
    "InvalidInputException":{
      "type":"structure",
      "members":{
        "code":{"shape":"string"},
        "docs":{"shape":"string"},
        "message":{"shape":"string"},
        "tip":{"shape":"string"}
      },
      "documentation":"<p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>",
      "exception":true
    },
    "IpAddress":{
      "type":"string",
      "pattern":"([0-9]{1,3}\\.){3}[0-9]{1,3}"
    },
    "IpV6Address":{
      "type":"string",
      "pattern":"([A-F0-9]{1,4}:){7}[A-F0-9]{1,4}"
    },
    "IsVpcPeeredRequest":{
      "type":"structure",
      "members":{
      }
    },
    "IsVpcPeeredResult":{
      "type":"structure",
      "members":{
        "isPeered":{
          "shape":"boolean",
          "documentation":"<p>Returns <code>true</code> if the Lightsail VPC is peered; otherwise, <code>false</code>.</p>"
        }
      }
    },
    "IsoDate":{"type":"timestamp"},
    "KeyPair":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The friendly name of the SSH key pair.</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the key pair (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:KeyPair/05859e3d-331d-48ba-9034-12345EXAMPLE</code>).</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the key pair was created (e.g., <code>1479816991.349</code>).</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The region name and Availability Zone where the key pair was created.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type (usually <code>KeyPair</code>).</p>"
        },
        "fingerprint":{
          "shape":"Base64",
          "documentation":"<p>The RSA fingerprint of the key pair.</p>"
        }
      },
      "documentation":"<p>Describes the SSH key pair.</p>"
    },
    "KeyPairList":{
      "type":"list",
      "member":{"shape":"KeyPair"}
    },
    "LoadBalancer":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer (e.g., <code>my-load-balancer</code>).</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the load balancer.</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about your Lightsail load balancer. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The date when your load balancer was created.</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The AWS Region where your load balancer was created (e.g., <code>us-east-2a</code>). Lightsail automatically creates your load balancer across Availability Zones.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type (e.g., <code>LoadBalancer</code>.</p>"
        },
        "dnsName":{
          "shape":"NonEmptyString",
          "documentation":"<p>The DNS name of your Lightsail load balancer.</p>"
        },
        "state":{
          "shape":"LoadBalancerState",
          "documentation":"<p>The status of your load balancer. Valid values are below.</p>"
        },
        "protocol":{
          "shape":"LoadBalancerProtocol",
          "documentation":"<p>The protocol you have enabled for your load balancer. Valid values are below.</p> <p>You can't just have <code>HTTP_HTTPS</code>, but you can have just <code>HTTP</code>.</p>"
        },
        "publicPorts":{
          "shape":"PortList",
          "documentation":"<p>An array of public port settings for your load balancer. For HTTP, use port 80. For HTTPS, use port 443.</p>"
        },
        "healthCheckPath":{
          "shape":"NonEmptyString",
          "documentation":"<p>The path you specified to perform your health checks. If no path is specified, the load balancer tries to make a request to the default (root) page.</p>"
        },
        "instancePort":{
          "shape":"integer",
          "documentation":"<p>The port where the load balancer will direct traffic to your Lightsail instances. For HTTP traffic, it's port 80. For HTTPS traffic, it's port 443.</p>"
        },
        "instanceHealthSummary":{
          "shape":"InstanceHealthSummaryList",
          "documentation":"<p>An array of InstanceHealthSummary objects describing the health of the load balancer.</p>"
        },
        "tlsCertificateSummaries":{
          "shape":"LoadBalancerTlsCertificateSummaryList",
          "documentation":"<p>An array of LoadBalancerTlsCertificateSummary objects that provide additional information about the SSL/TLS certificates. For example, if <code>true</code>, the certificate is attached to the load balancer.</p>"
        },
        "configurationOptions":{
          "shape":"LoadBalancerConfigurationOptions",
          "documentation":"<p>A string to string map of the configuration options for your load balancer. Valid values are listed below.</p>"
        }
      },
      "documentation":"<p>Describes the Lightsail load balancer.</p>"
    },
    "LoadBalancerAttributeName":{
      "type":"string",
      "enum":[
        "HealthCheckPath",
        "SessionStickinessEnabled",
        "SessionStickiness_LB_CookieDurationSeconds"
      ]
    },
    "LoadBalancerConfigurationOptions":{
      "type":"map",
      "key":{"shape":"LoadBalancerAttributeName"},
      "value":{"shape":"string"}
    },
    "LoadBalancerList":{
      "type":"list",
      "member":{"shape":"LoadBalancer"}
    },
    "LoadBalancerMetricName":{
      "type":"string",
      "enum":[
        "ClientTLSNegotiationErrorCount",
        "HealthyHostCount",
        "UnhealthyHostCount",
        "HTTPCode_LB_4XX_Count",
        "HTTPCode_LB_5XX_Count",
        "HTTPCode_Instance_2XX_Count",
        "HTTPCode_Instance_3XX_Count",
        "HTTPCode_Instance_4XX_Count",
        "HTTPCode_Instance_5XX_Count",
        "InstanceResponseTime",
        "RejectedConnectionCount",
        "RequestCount"
      ]
    },
    "LoadBalancerProtocol":{
      "type":"string",
      "enum":[
        "HTTP_HTTPS",
        "HTTP"
      ]
    },
    "LoadBalancerState":{
      "type":"string",
      "enum":[
        "active",
        "provisioning",
        "active_impaired",
        "failed",
        "unknown"
      ]
    },
    "LoadBalancerTlsCertificate":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the SSL/TLS certificate (e.g., <code>my-certificate</code>).</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the SSL/TLS certificate.</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about your Lightsail load balancer or SSL/TLS certificate. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The time when you created your SSL/TLS certificate.</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The AWS Region and Availability Zone where you created your certificate.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type (e.g., <code>LoadBalancerTlsCertificate</code>).</p> <ul> <li> <p> <b> <code>Instance</code> </b> - A Lightsail instance (a virtual private server)</p> </li> <li> <p> <b> <code>StaticIp</code> </b> - A static IP address</p> </li> <li> <p> <b> <code>KeyPair</code> </b> - The key pair used to connect to a Lightsail instance</p> </li> <li> <p> <b> <code>InstanceSnapshot</code> </b> - A Lightsail instance snapshot</p> </li> <li> <p> <b> <code>Domain</code> </b> - A DNS zone</p> </li> <li> <p> <b> <code>PeeredVpc</code> </b> - A peered VPC</p> </li> <li> <p> <b> <code>LoadBalancer</code> </b> - A Lightsail load balancer</p> </li> <li> <p> <b> <code>LoadBalancerTlsCertificate</code> </b> - An SSL/TLS certificate associated with a Lightsail load balancer</p> </li> <li> <p> <b> <code>Disk</code> </b> - A Lightsail block storage disk</p> </li> <li> <p> <b> <code>DiskSnapshot</code> </b> - A block storage disk snapshot</p> </li> </ul>"
        },
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The load balancer name where your SSL/TLS certificate is attached.</p>"
        },
        "isAttached":{
          "shape":"boolean",
          "documentation":"<p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load balancer.</p>"
        },
        "status":{
          "shape":"LoadBalancerTlsCertificateStatus",
          "documentation":"<p>The status of the SSL/TLS certificate. Valid values are below.</p>"
        },
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The domain name for your SSL/TLS certificate.</p>"
        },
        "domainValidationRecords":{
          "shape":"LoadBalancerTlsCertificateDomainValidationRecordList",
          "documentation":"<p>An array of LoadBalancerTlsCertificateDomainValidationRecord objects describing the records.</p>"
        },
        "failureReason":{
          "shape":"LoadBalancerTlsCertificateFailureReason",
          "documentation":"<p>The reason for the SSL/TLS certificate validation failure.</p>"
        },
        "issuedAt":{
          "shape":"IsoDate",
          "documentation":"<p>The time when the SSL/TLS certificate was issued.</p>"
        },
        "issuer":{
          "shape":"NonEmptyString",
          "documentation":"<p>The issuer of the certificate.</p>"
        },
        "keyAlgorithm":{
          "shape":"NonEmptyString",
          "documentation":"<p>The algorithm that was used to generate the key pair (the public and private key).</p>"
        },
        "notAfter":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the SSL/TLS certificate expires.</p>"
        },
        "notBefore":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the SSL/TLS certificate is first valid.</p>"
        },
        "renewalSummary":{
          "shape":"LoadBalancerTlsCertificateRenewalSummary",
          "documentation":"<p>An object containing information about the status of Lightsail's managed renewal for the certificate.</p>"
        },
        "revocationReason":{
          "shape":"LoadBalancerTlsCertificateRevocationReason",
          "documentation":"<p>The reason the certificate was revoked. Valid values are below.</p>"
        },
        "revokedAt":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the SSL/TLS certificate was revoked.</p>"
        },
        "serial":{
          "shape":"NonEmptyString",
          "documentation":"<p>The serial number of the certificate.</p>"
        },
        "signatureAlgorithm":{
          "shape":"NonEmptyString",
          "documentation":"<p>The algorithm that was used to sign the certificate.</p>"
        },
        "subject":{
          "shape":"NonEmptyString",
          "documentation":"<p>The name of the entity that is associated with the public key contained in the certificate.</p>"
        },
        "subjectAlternativeNames":{
          "shape":"StringList",
          "documentation":"<p>One or more domains or subdomains included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CNAME) of the certificate and additional domain names that can be used to connect to the website, such as <code>example.com</code>, <code>www.example.com</code>, or <code>m.example.com</code>.</p>"
        }
      },
      "documentation":"<p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>"
    },
    "LoadBalancerTlsCertificateDomainStatus":{
      "type":"string",
      "enum":[
        "PENDING_VALIDATION",
        "FAILED",
        "SUCCESS"
      ]
    },
    "LoadBalancerTlsCertificateDomainValidationOption":{
      "type":"structure",
      "members":{
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The fully qualified domain name in the certificate request.</p>"
        },
        "validationStatus":{
          "shape":"LoadBalancerTlsCertificateDomainStatus",
          "documentation":"<p>The status of the domain validation. Valid values are listed below.</p>"
        }
      },
      "documentation":"<p>Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership.</p>"
    },
    "LoadBalancerTlsCertificateDomainValidationOptionList":{
      "type":"list",
      "member":{"shape":"LoadBalancerTlsCertificateDomainValidationOption"}
    },
    "LoadBalancerTlsCertificateDomainValidationRecord":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"NonEmptyString",
          "documentation":"<p>A fully qualified domain name in the certificate. For example, <code>example.com</code>.</p>"
        },
        "type":{
          "shape":"NonEmptyString",
          "documentation":"<p>The type of validation record. For example, <code>CNAME</code> for domain validation.</p>"
        },
        "value":{
          "shape":"NonEmptyString",
          "documentation":"<p>The value for that type.</p>"
        },
        "validationStatus":{
          "shape":"LoadBalancerTlsCertificateDomainStatus",
          "documentation":"<p>The validation status. Valid values are listed below.</p>"
        },
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The domain name against which your SSL/TLS certificate was validated.</p>"
        }
      },
      "documentation":"<p>Describes the validation record of each domain name in the SSL/TLS certificate.</p>"
    },
    "LoadBalancerTlsCertificateDomainValidationRecordList":{
      "type":"list",
      "member":{"shape":"LoadBalancerTlsCertificateDomainValidationRecord"}
    },
    "LoadBalancerTlsCertificateFailureReason":{
      "type":"string",
      "enum":[
        "NO_AVAILABLE_CONTACTS",
        "ADDITIONAL_VERIFICATION_REQUIRED",
        "DOMAIN_NOT_ALLOWED",
        "INVALID_PUBLIC_DOMAIN",
        "OTHER"
      ]
    },
    "LoadBalancerTlsCertificateList":{
      "type":"list",
      "member":{"shape":"LoadBalancerTlsCertificate"}
    },
    "LoadBalancerTlsCertificateRenewalStatus":{
      "type":"string",
      "enum":[
        "PENDING_AUTO_RENEWAL",
        "PENDING_VALIDATION",
        "SUCCESS",
        "FAILED"
      ]
    },
    "LoadBalancerTlsCertificateRenewalSummary":{
      "type":"structure",
      "members":{
        "renewalStatus":{
          "shape":"LoadBalancerTlsCertificateRenewalStatus",
          "documentation":"<p>The status of Lightsail's managed renewal of the certificate. Valid values are listed below.</p>"
        },
        "domainValidationOptions":{
          "shape":"LoadBalancerTlsCertificateDomainValidationOptionList",
          "documentation":"<p>Contains information about the validation of each domain name in the certificate, as it pertains to Lightsail's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request.</p>"
        }
      },
      "documentation":"<p>Contains information about the status of Lightsail's managed renewal for the certificate.</p>"
    },
    "LoadBalancerTlsCertificateRevocationReason":{
      "type":"string",
      "enum":[
        "UNSPECIFIED",
        "KEY_COMPROMISE",
        "CA_COMPROMISE",
        "AFFILIATION_CHANGED",
        "SUPERCEDED",
        "CESSATION_OF_OPERATION",
        "CERTIFICATE_HOLD",
        "REMOVE_FROM_CRL",
        "PRIVILEGE_WITHDRAWN",
        "A_A_COMPROMISE"
      ]
    },
    "LoadBalancerTlsCertificateStatus":{
      "type":"string",
      "enum":[
        "PENDING_VALIDATION",
        "ISSUED",
        "INACTIVE",
        "EXPIRED",
        "VALIDATION_TIMED_OUT",
        "REVOKED",
        "FAILED",
        "UNKNOWN"
      ]
    },
    "LoadBalancerTlsCertificateSummary":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the SSL/TLS certificate.</p>"
        },
        "isAttached":{
          "shape":"boolean",
          "documentation":"<p>When <code>true</code>, the SSL/TLS certificate is attached to the Lightsail load balancer.</p>"
        }
      },
      "documentation":"<p>Provides a summary of SSL/TLS certificate metadata.</p>"
    },
    "LoadBalancerTlsCertificateSummaryList":{
      "type":"list",
      "member":{"shape":"LoadBalancerTlsCertificateSummary"}
    },
    "MetricDatapoint":{
      "type":"structure",
      "members":{
        "average":{
          "shape":"double",
          "documentation":"<p>The average.</p>"
        },
        "maximum":{
          "shape":"double",
          "documentation":"<p>The maximum.</p>"
        },
        "minimum":{
          "shape":"double",
          "documentation":"<p>The minimum.</p>"
        },
        "sampleCount":{
          "shape":"double",
          "documentation":"<p>The sample count.</p>"
        },
        "sum":{
          "shape":"double",
          "documentation":"<p>The sum.</p>"
        },
        "timestamp":{
          "shape":"timestamp",
          "documentation":"<p>The timestamp (e.g., <code>1479816991.349</code>).</p>"
        },
        "unit":{
          "shape":"MetricUnit",
          "documentation":"<p>The unit. </p>"
        }
      },
      "documentation":"<p>Describes the metric data point.</p>"
    },
    "MetricDatapointList":{
      "type":"list",
      "member":{"shape":"MetricDatapoint"}
    },
    "MetricPeriod":{
      "type":"integer",
      "max":86400,
      "min":60
    },
    "MetricStatistic":{
      "type":"string",
      "enum":[
        "Minimum",
        "Maximum",
        "Sum",
        "Average",
        "SampleCount"
      ]
    },
    "MetricStatisticList":{
      "type":"list",
      "member":{"shape":"MetricStatistic"}
    },
    "MetricUnit":{
      "type":"string",
      "enum":[
        "Seconds",
        "Microseconds",
        "Milliseconds",
        "Bytes",
        "Kilobytes",
        "Megabytes",
        "Gigabytes",
        "Terabytes",
        "Bits",
        "Kilobits",
        "Megabits",
        "Gigabits",
        "Terabits",
        "Percent",
        "Count",
        "Bytes/Second",
        "Kilobytes/Second",
        "Megabytes/Second",
        "Gigabytes/Second",
        "Terabytes/Second",
        "Bits/Second",
        "Kilobits/Second",
        "Megabits/Second",
        "Gigabits/Second",
        "Terabits/Second",
        "Count/Second",
        "None"
      ]
    },
    "MonthlyTransfer":{
      "type":"structure",
      "members":{
        "gbPerMonthAllocated":{
          "shape":"integer",
          "documentation":"<p>The amount allocated per month (in GB).</p>"
        }
      },
      "documentation":"<p>Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>).</p>"
    },
    "NetworkProtocol":{
      "type":"string",
      "enum":[
        "tcp",
        "all",
        "udp"
      ]
    },
    "NonEmptyString":{
      "type":"string",
      "pattern":".*\\S.*"
    },
    "NotFoundException":{
      "type":"structure",
      "members":{
        "code":{"shape":"string"},
        "docs":{"shape":"string"},
        "message":{"shape":"string"},
        "tip":{"shape":"string"}
      },
      "documentation":"<p>Lightsail throws this exception when it cannot find a resource.</p>",
      "exception":true
    },
    "OpenInstancePublicPortsRequest":{
      "type":"structure",
      "required":[
        "portInfo",
        "instanceName"
      ],
      "members":{
        "portInfo":{
          "shape":"PortInfo",
          "documentation":"<p>An array of key-value pairs containing information about the port mappings.</p>"
        },
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance for which you want to open the public ports.</p>"
        }
      }
    },
    "OpenInstancePublicPortsResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "Operation":{
      "type":"structure",
      "members":{
        "id":{
          "shape":"NonEmptyString",
          "documentation":"<p>The ID of the operation.</p>"
        },
        "resourceName":{
          "shape":"ResourceName",
          "documentation":"<p>The resource name.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type. </p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the operation was initialized (e.g., <code>1479816991.349</code>).</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The region and Availability Zone.</p>"
        },
        "isTerminal":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether the operation is terminal.</p>"
        },
        "operationDetails":{
          "shape":"string",
          "documentation":"<p>Details about the operation (e.g., <code>Debian-1GB-Ohio-1</code>).</p>"
        },
        "operationType":{
          "shape":"OperationType",
          "documentation":"<p>The type of operation. </p>"
        },
        "status":{
          "shape":"OperationStatus",
          "documentation":"<p>The status of the operation. </p>"
        },
        "statusChangedAt":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the status was changed (e.g., <code>1479816991.349</code>).</p>"
        },
        "errorCode":{
          "shape":"string",
          "documentation":"<p>The error code.</p>"
        },
        "errorDetails":{
          "shape":"string",
          "documentation":"<p>The error details.</p>"
        }
      },
      "documentation":"<p>Describes the API operation.</p>"
    },
    "OperationFailureException":{
      "type":"structure",
      "members":{
        "code":{"shape":"string"},
        "docs":{"shape":"string"},
        "message":{"shape":"string"},
        "tip":{"shape":"string"}
      },
      "documentation":"<p>Lightsail throws this exception when an operation fails to execute.</p>",
      "exception":true
    },
    "OperationList":{
      "type":"list",
      "member":{"shape":"Operation"}
    },
    "OperationStatus":{
      "type":"string",
      "enum":[
        "NotStarted",
        "Started",
        "Failed",
        "Completed",
        "Succeeded"
      ]
    },
    "OperationType":{
      "type":"string",
      "enum":[
        "DeleteInstance",
        "CreateInstance",
        "StopInstance",
        "StartInstance",
        "RebootInstance",
        "OpenInstancePublicPorts",
        "PutInstancePublicPorts",
        "CloseInstancePublicPorts",
        "AllocateStaticIp",
        "ReleaseStaticIp",
        "AttachStaticIp",
        "DetachStaticIp",
        "UpdateDomainEntry",
        "DeleteDomainEntry",
        "CreateDomain",
        "DeleteDomain",
        "CreateInstanceSnapshot",
        "DeleteInstanceSnapshot",
        "CreateInstancesFromSnapshot",
        "CreateLoadBalancer",
        "DeleteLoadBalancer",
        "AttachInstancesToLoadBalancer",
        "DetachInstancesFromLoadBalancer",
        "UpdateLoadBalancerAttribute",
        "CreateLoadBalancerTlsCertificate",
        "DeleteLoadBalancerTlsCertificate",
        "AttachLoadBalancerTlsCertificate",
        "CreateDisk",
        "DeleteDisk",
        "AttachDisk",
        "DetachDisk",
        "CreateDiskSnapshot",
        "DeleteDiskSnapshot",
        "CreateDiskFromSnapshot"
      ]
    },
    "PasswordData":{
      "type":"structure",
      "members":{
        "ciphertext":{
          "shape":"string",
          "documentation":"<p>The encrypted password. Ciphertext will be an empty string if access to your new instance is not ready yet. When you create an instance, it can take up to 15 minutes for the instance to be ready.</p> <note> <p>If you use the default key pair (<code>LightsailDefaultKeyPair</code>), the decrypted password will be available in the password field.</p> <p>If you are using a custom key pair, you need to use your own means of decryption.</p> <p>If you change the Administrator password on the instance, Lightsail will continue to return the original ciphertext value. When accessing the instance using RDP, you need to manually enter the Administrator password after changing it from the default.</p> </note>"
        },
        "keyPairName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the key pair that you used when creating your instance. If no key pair name was specified when creating the instance, Lightsail uses the default key pair (<code>LightsailDefaultKeyPair</code>).</p> <p>If you are using a custom key pair, you need to use your own means of decrypting your password using the <code>ciphertext</code>. Lightsail creates the ciphertext by encrypting your password with the public key part of this key pair.</p>"
        }
      },
      "documentation":"<p>The password data for the Windows Server-based instance, including the ciphertext and the key pair name.</p>"
    },
    "PeerVpcRequest":{
      "type":"structure",
      "members":{
      }
    },
    "PeerVpcResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "Port":{
      "type":"integer",
      "max":65535,
      "min":0
    },
    "PortAccessType":{
      "type":"string",
      "enum":[
        "Public",
        "Private"
      ]
    },
    "PortInfo":{
      "type":"structure",
      "members":{
        "fromPort":{
          "shape":"Port",
          "documentation":"<p>The first port in the range.</p>"
        },
        "toPort":{
          "shape":"Port",
          "documentation":"<p>The last port in the range.</p>"
        },
        "protocol":{
          "shape":"NetworkProtocol",
          "documentation":"<p>The protocol. </p>"
        }
      },
      "documentation":"<p>Describes information about the ports on your virtual private server (or <i>instance</i>).</p>"
    },
    "PortInfoList":{
      "type":"list",
      "member":{"shape":"PortInfo"}
    },
    "PortList":{
      "type":"list",
      "member":{"shape":"Port"}
    },
    "PortState":{
      "type":"string",
      "enum":[
        "open",
        "closed"
      ]
    },
    "PutInstancePublicPortsRequest":{
      "type":"structure",
      "required":[
        "portInfos",
        "instanceName"
      ],
      "members":{
        "portInfos":{
          "shape":"PortInfoList",
          "documentation":"<p>Specifies information about the public port(s).</p>"
        },
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The Lightsail instance name of the public port(s) you are setting.</p>"
        }
      }
    },
    "PutInstancePublicPortsResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>Describes metadata about the operation you just executed.</p>"
        }
      }
    },
    "RebootInstanceRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance to reboot.</p>"
        }
      }
    },
    "RebootInstanceResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the request operations.</p>"
        }
      }
    },
    "Region":{
      "type":"structure",
      "members":{
        "continentCode":{
          "shape":"string",
          "documentation":"<p>The continent code (e.g., <code>NA</code>, meaning North America).</p>"
        },
        "description":{
          "shape":"string",
          "documentation":"<p>The description of the AWS Region (e.g., <code>This region is recommended to serve users in the eastern United States and eastern Canada</code>).</p>"
        },
        "displayName":{
          "shape":"string",
          "documentation":"<p>The display name (e.g., <code>Ohio</code>).</p>"
        },
        "name":{
          "shape":"RegionName",
          "documentation":"<p>The region name (e.g., <code>us-east-2</code>).</p>"
        },
        "availabilityZones":{
          "shape":"AvailabilityZoneList",
          "documentation":"<p>The Availability Zones. Follows the format <code>us-east-2a</code> (case-sensitive).</p>"
        }
      },
      "documentation":"<p>Describes the AWS Region.</p>"
    },
    "RegionList":{
      "type":"list",
      "member":{"shape":"Region"}
    },
    "RegionName":{
      "type":"string",
      "enum":[
        "us-east-1",
        "us-east-2",
        "us-west-1",
        "us-west-2",
        "eu-central-1",
        "eu-west-1",
        "eu-west-2",
        "ap-south-1",
        "ap-southeast-1",
        "ap-southeast-2",
        "ap-northeast-1",
        "ap-northeast-2"
      ]
    },
    "ReleaseStaticIpRequest":{
      "type":"structure",
      "required":["staticIpName"],
      "members":{
        "staticIpName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the static IP to delete.</p>"
        }
      }
    },
    "ReleaseStaticIpResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "ResourceLocation":{
      "type":"structure",
      "members":{
        "availabilityZone":{
          "shape":"string",
          "documentation":"<p>The Availability Zone. Follows the format <code>us-east-2a</code> (case-sensitive).</p>"
        },
        "regionName":{
          "shape":"RegionName",
          "documentation":"<p>The AWS Region name.</p>"
        }
      },
      "documentation":"<p>Describes the resource location.</p>"
    },
    "ResourceName":{
      "type":"string",
      "pattern":"\\w[\\w\\-]*\\w"
    },
    "ResourceNameList":{
      "type":"list",
      "member":{"shape":"ResourceName"}
    },
    "ResourceType":{
      "type":"string",
      "enum":[
        "Instance",
        "StaticIp",
        "KeyPair",
        "InstanceSnapshot",
        "Domain",
        "PeeredVpc",
        "LoadBalancer",
        "LoadBalancerTlsCertificate",
        "Disk",
        "DiskSnapshot"
      ]
    },
    "ServiceException":{
      "type":"structure",
      "members":{
        "code":{"shape":"string"},
        "docs":{"shape":"string"},
        "message":{"shape":"string"},
        "tip":{"shape":"string"}
      },
      "documentation":"<p>A general service exception.</p>",
      "exception":true,
      "fault":true
    },
    "StartInstanceRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance (a virtual private server) to start.</p>"
        }
      }
    },
    "StartInstanceResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "StaticIp":{
      "type":"structure",
      "members":{
        "name":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the static IP (e.g., <code>StaticIP-Ohio-EXAMPLE</code>).</p>"
        },
        "arn":{
          "shape":"NonEmptyString",
          "documentation":"<p>The Amazon Resource Name (ARN) of the static IP (e.g., <code>arn:aws:lightsail:us-east-2:123456789101:StaticIp/9cbb4a9e-f8e3-4dfe-b57e-12345EXAMPLE</code>).</p>"
        },
        "supportCode":{
          "shape":"string",
          "documentation":"<p>The support code. Include this code in your email to support when you have questions about an instance or another resource in Lightsail. This code enables our support team to look up your Lightsail information more easily.</p>"
        },
        "createdAt":{
          "shape":"IsoDate",
          "documentation":"<p>The timestamp when the static IP was created (e.g., <code>1479735304.222</code>).</p>"
        },
        "location":{
          "shape":"ResourceLocation",
          "documentation":"<p>The region and Availability Zone where the static IP was created.</p>"
        },
        "resourceType":{
          "shape":"ResourceType",
          "documentation":"<p>The resource type (usually <code>StaticIp</code>).</p>"
        },
        "ipAddress":{
          "shape":"IpAddress",
          "documentation":"<p>The static IP address.</p>"
        },
        "attachedTo":{
          "shape":"ResourceName",
          "documentation":"<p>The instance where the static IP is attached (e.g., <code>Amazon_Linux-1GB-Ohio-1</code>).</p>"
        },
        "isAttached":{
          "shape":"boolean",
          "documentation":"<p>A Boolean value indicating whether the static IP is attached.</p>"
        }
      },
      "documentation":"<p>Describes the static IP.</p>"
    },
    "StaticIpList":{
      "type":"list",
      "member":{"shape":"StaticIp"}
    },
    "StopInstanceRequest":{
      "type":"structure",
      "required":["instanceName"],
      "members":{
        "instanceName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the instance (a virtual private server) to stop.</p>"
        },
        "force":{
          "shape":"boolean",
          "documentation":"<p>When set to <code>True</code>, forces a Lightsail instance that is stuck in a <code>stopping</code> state to stop.</p> <important> <p>Only use the <code>force</code> parameter if your instance is stuck in the <code>stopping</code> state. In any other state, your instance should stop normally without adding this parameter to your API request.</p> </important>"
        }
      }
    },
    "StopInstanceResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "StringList":{
      "type":"list",
      "member":{"shape":"string"}
    },
    "StringMax256":{
      "type":"string",
      "max":256,
      "min":1
    },
    "UnauthenticatedException":{
      "type":"structure",
      "members":{
        "code":{"shape":"string"},
        "docs":{"shape":"string"},
        "message":{"shape":"string"},
        "tip":{"shape":"string"}
      },
      "documentation":"<p>Lightsail throws this exception when the user has not been authenticated.</p>",
      "exception":true
    },
    "UnpeerVpcRequest":{
      "type":"structure",
      "members":{
      }
    },
    "UnpeerVpcResult":{
      "type":"structure",
      "members":{
        "operation":{
          "shape":"Operation",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "UpdateDomainEntryRequest":{
      "type":"structure",
      "required":[
        "domainName",
        "domainEntry"
      ],
      "members":{
        "domainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain recordset to update.</p>"
        },
        "domainEntry":{
          "shape":"DomainEntry",
          "documentation":"<p>An array of key-value pairs containing information about the domain entry.</p>"
        }
      }
    },
    "UpdateDomainEntryResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An array of key-value pairs containing information about the request operation.</p>"
        }
      }
    },
    "UpdateLoadBalancerAttributeRequest":{
      "type":"structure",
      "required":[
        "loadBalancerName",
        "attributeName",
        "attributeValue"
      ],
      "members":{
        "loadBalancerName":{
          "shape":"ResourceName",
          "documentation":"<p>The name of the load balancer that you want to modify (e.g., <code>my-load-balancer</code>.</p>"
        },
        "attributeName":{
          "shape":"LoadBalancerAttributeName",
          "documentation":"<p>The name of the attribute you want to update. Valid values are below.</p>"
        },
        "attributeValue":{
          "shape":"StringMax256",
          "documentation":"<p>The value that you want to specify for the attribute name.</p>"
        }
      }
    },
    "UpdateLoadBalancerAttributeResult":{
      "type":"structure",
      "members":{
        "operations":{
          "shape":"OperationList",
          "documentation":"<p>An object describing the API operations.</p>"
        }
      }
    },
    "boolean":{"type":"boolean"},
    "double":{"type":"double"},
    "float":{"type":"float"},
    "integer":{"type":"integer"},
    "string":{"type":"string"},
    "timestamp":{"type":"timestamp"}
  },
  "documentation":"<p>Amazon Lightsail is the easiest way to get started with AWS for developers who just need virtual private servers. Lightsail includes everything you need to launch your project quickly - a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP - for a low, predictable price. You manage those Lightsail servers through the Lightsail console or by using the API or command-line interface (CLI).</p> <p>For more information about Lightsail concepts and tasks, see the <a href=\"https://lightsail.aws.amazon.com/ls/docs/all\">Lightsail Dev Guide</a>.</p> <p>To use the Lightsail API or the CLI, you will need to use AWS Identity and Access Management (IAM) to generate access keys. For details about how to set this up, see the <a href=\"http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli\">Lightsail Dev Guide</a>.</p>"
}
