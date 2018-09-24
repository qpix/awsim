awsim['storagegateway'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2013-06-30",
    "endpointPrefix":"storagegateway",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Storage Gateway",
    "serviceId":"Storage Gateway",
    "signatureVersion":"v4",
    "targetPrefix":"StorageGateway_20130630",
    "uid":"storagegateway-2013-06-30"
  },
  "operations":{
    "ActivateGateway":{
      "name":"ActivateGateway",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ActivateGatewayInput"},
      "output":{"shape":"ActivateGatewayOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Activates the gateway you previously deployed on your host. In the activation process, you specify information such as the region you want to use for storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot schedule window, an activation key, and a name for your gateway. The activation process also associates your gateway with your account; for more information, see <a>UpdateGatewayInformation</a>.</p> <note> <p>You must turn on the gateway VM before you can activate your gateway.</p> </note>"
    },
    "AddCache":{
      "name":"AddCache",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddCacheInput"},
      "output":{"shape":"AddCacheOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Configures one or more gateway local disks as cache for a gateway. This operation is only supported in the cached volume, tape and file gateway type (see <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html\">Storage Gateway Concepts</a>).</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add cache, and one or more disk IDs that you want to configure as cache.</p>"
    },
    "AddTagsToResource":{
      "name":"AddTagsToResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddTagsToResourceInput"},
      "output":{"shape":"AddTagsToResourceOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Adds one or more tags to the specified resource. You use tags to add metadata to resources, which you can use to categorize these resources. For example, you can categorize resources by purpose, owner, environment, or team. Each tag consists of a key and a value, which you define. You can add tags to the following AWS Storage Gateway resources:</p> <ul> <li> <p>Storage gateways of all types</p> </li> </ul> <ul> <li> <p>Storage Volumes</p> </li> </ul> <ul> <li> <p>Virtual Tapes</p> </li> </ul> <p>You can create a maximum of 10 tags for each resource. Virtual tapes and storage volumes that are recovered to a new gateway maintain their tags.</p>"
    },
    "AddUploadBuffer":{
      "name":"AddUploadBuffer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddUploadBufferInput"},
      "output":{"shape":"AddUploadBufferOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Configures one or more gateway local disks as upload buffer for a specified gateway. This operation is supported for the stored volume, cached volume and tape gateway types.</p> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add upload buffer, and one or more disk IDs that you want to configure as upload buffer.</p>"
    },
    "AddWorkingStorage":{
      "name":"AddWorkingStorage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AddWorkingStorageInput"},
      "output":{"shape":"AddWorkingStorageOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Configures one or more gateway local disks as working storage for a gateway. This operation is only supported in the stored volume gateway type. This operation is deprecated in cached volume API version 20120630. Use <a>AddUploadBuffer</a> instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the <a>AddUploadBuffer</a> operation to add upload buffer to a stored volume gateway.</p> </note> <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to add working storage, and one or more disk IDs that you want to configure as working storage.</p>"
    },
    "CancelArchival":{
      "name":"CancelArchival",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CancelArchivalInput"},
      "output":{"shape":"CancelArchivalOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Cancels archiving of a virtual tape to the virtual tape shelf (VTS) after the archiving process is initiated. This operation is only supported in the tape gateway type.</p>"
    },
    "CancelRetrieval":{
      "name":"CancelRetrieval",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CancelRetrievalInput"},
      "output":{"shape":"CancelRetrievalOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated. The virtual tape is returned to the VTS. This operation is only supported in the tape gateway type.</p>"
    },
    "CreateCachediSCSIVolume":{
      "name":"CreateCachediSCSIVolume",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateCachediSCSIVolumeInput"},
      "output":{"shape":"CreateCachediSCSIVolumeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Creates a cached volume on a specified cached volume gateway. This operation is only supported in the cached volume gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a cached volume. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note> <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI target name, an IP address on which to expose the target, and a unique client token. In response, the gateway creates the volume and returns information about it. This information includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p> <p>Optionally, you can provide the ARN for an existing volume as the <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be equal to or larger than the size of the copied volume, in bytes.</p>"
    },
    "CreateNFSFileShare":{
      "name":"CreateNFSFileShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateNFSFileShareInput"},
      "output":{"shape":"CreateNFSFileShareOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Creates a Network File System (NFS) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway exposes file shares using a NFS interface. This operation is only supported for file gateways.</p> <important> <p>File gateway requires AWS Security Token Service (AWS STS) to be activated to enable you create a file share. Make sure AWS STS is activated in the region you are creating your file gateway in. If AWS STS is not activated in the region, activate it. For information about how to activate AWS STS, see Activating and Deactivating AWS STS in an AWS Region in the AWS Identity and Access Management User Guide. </p> <p>File gateway does not support creating hard or symbolic links on a file share.</p> </important>"
    },
    "CreateSMBFileShare":{
      "name":"CreateSMBFileShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateSMBFileShareInput"},
      "output":{"shape":"CreateSMBFileShareOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Creates a Server Message Block (SMB) file share on an existing file gateway. In Storage Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage. Storage Gateway expose file shares using a SMB interface. This operation is only supported for file gateways.</p> <important> <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html\">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide.</i> </p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>"
    },
    "CreateSnapshot":{
      "name":"CreateSnapshot",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateSnapshotInput"},
      "output":{"shape":"CreateSnapshotOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableError"}
      ],
      "documentation":"<p>Initiates a snapshot of a volume.</p> <p>AWS Storage Gateway provides the ability to back up point-in-time snapshots of your data to Amazon Simple Storage (S3) for durable off-site recovery, as well as import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad-hoc basis. This API enables you to take ad-hoc snapshot. For more information, see <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot\">Editing a Snapshot Schedule</a>.</p> <p>In the CreateSnapshot request you identify the volume by providing its Amazon Resource Name (ARN). You must also provide description for the snapshot. When AWS Storage Gateway takes the snapshot of specified volume, the snapshot and description appears in the AWS Storage Gateway Console. In response, AWS Storage Gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot. This operation is only supported in stored and cached volume gateway type.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, see DescribeSnapshots or DeleteSnapshot in the <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Operations.html\">EC2 API reference</a>.</p> </note> <important> <p>Volume and snapshot IDs are changing to a longer length ID format. For more information, see the important note on the <a href=\"http://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html\">Welcome</a> page.</p> </important>"
    },
    "CreateSnapshotFromVolumeRecoveryPoint":{
      "name":"CreateSnapshotFromVolumeRecoveryPoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateSnapshotFromVolumeRecoveryPointInput"},
      "output":{"shape":"CreateSnapshotFromVolumeRecoveryPointOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"},
        {"shape":"ServiceUnavailableError"}
      ],
      "documentation":"<p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only supported in the cached volume gateway type.</p> <p>A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot. To get a list of volume recovery point for cached volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p> <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the volume by providing its Amazon Resource Name (ARN). You must also provide a description for the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and its description appear in the AWS Storage Gateway console. In response, the gateway returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use it when you want to create a volume from a snapshot.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information, in <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>"
    },
    "CreateStorediSCSIVolume":{
      "name":"CreateStorediSCSIVolume",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateStorediSCSIVolumeInput"},
      "output":{"shape":"CreateStorediSCSIVolumeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Creates a volume on a specified gateway. This operation is only supported in the stored volume gateway type.</p> <p>The size of the volume to create is inferred from the disk size. You can choose to preserve existing data on the disk, create volume from an existing snapshot, or create an empty volume. If you choose to create an empty gateway volume, then any existing data on the disk is erased.</p> <p>In the request you must specify the gateway and the disk information on which you are creating the volume. In response, the gateway creates the volume and returns volume information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that initiators can use to connect to the volume target.</p>"
    },
    "CreateTapeWithBarcode":{
      "name":"CreateTapeWithBarcode",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTapeWithBarcodeInput"},
      "output":{"shape":"CreateTapeWithBarcodeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and then archive the tape. A barcode is unique and can not be reused if it has already been used on a tape . This applies to barcodes used on deleted tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create a virtual tape. Use the <a>AddCache</a> operation to add cache storage to a gateway.</p> </note>"
    },
    "CreateTapes":{
      "name":"CreateTapes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateTapesInput"},
      "output":{"shape":"CreateTapesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive the tapes. This operation is only supported in the tape gateway type.</p> <note> <p>Cache storage must be allocated to the gateway before you can create virtual tapes. Use the <a>AddCache</a> operation to add cache storage to a gateway. </p> </note>"
    },
    "DeleteBandwidthRateLimit":{
      "name":"DeleteBandwidthRateLimit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteBandwidthRateLimitInput"},
      "output":{"shape":"DeleteBandwidthRateLimitOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and download bandwidth rate limit, or you can delete both. If you delete only one of the limits, the other limit remains unchanged. To specify which gateway to work with, use the Amazon Resource Name (ARN) of the gateway in your request.</p>"
    },
    "DeleteChapCredentials":{
      "name":"DeleteChapCredentials",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteChapCredentialsInput"},
      "output":{"shape":"DeleteChapCredentialsOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target and initiator pair.</p>"
    },
    "DeleteFileShare":{
      "name":"DeleteFileShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteFileShareInput"},
      "output":{"shape":"DeleteFileShareOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes a file share from a file gateway. This operation is only supported for file gateways.</p>"
    },
    "DeleteGateway":{
      "name":"DeleteGateway",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteGatewayInput"},
      "output":{"shape":"DeleteGatewayOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes a gateway. To specify which gateway to delete, use the Amazon Resource Name (ARN) of the gateway in your request. The operation deletes the gateway; however, it does not delete the gateway virtual machine (VM) from your host computer.</p> <p>After you delete a gateway, you cannot reactivate it. Completed snapshots of the gateway volumes are not deleted upon deleting the gateway, however, pending snapshots will not complete. After you delete a gateway, your next step is to remove it from your environment.</p> <important> <p>You no longer pay software charges after the gateway is deleted; however, your existing Amazon EBS snapshots persist and you will continue to be billed for these snapshots. You can choose to remove all remaining Amazon EBS snapshots by canceling your Amazon EC2 subscription.  If you prefer not to cancel your Amazon EC2 subscription, you can delete your snapshots using the Amazon EC2 console. For more information, see the <a href=\"http://aws.amazon.com/storagegateway\"> AWS Storage Gateway Detail Page</a>. </p> </important>"
    },
    "DeleteSnapshotSchedule":{
      "name":"DeleteSnapshotSchedule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteSnapshotScheduleInput"},
      "output":{"shape":"DeleteSnapshotScheduleOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes a snapshot of a volume.</p> <p>You can take snapshots of your gateway volumes on a scheduled or ad hoc basis. This API action enables you to delete a snapshot schedule for a volume. For more information, see <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/WorkingWithSnapshots.html\">Working with Snapshots</a>. In the <code>DeleteSnapshotSchedule</code> request, you identify the volume by providing its Amazon Resource Name (ARN). This operation is only supported in stored and cached volume gateway types.</p> <note> <p>To list or delete a snapshot, you must use the Amazon EC2 API. in <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </note>"
    },
    "DeleteTape":{
      "name":"DeleteTape",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTapeInput"},
      "output":{"shape":"DeleteTapeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes the specified virtual tape. This operation is only supported in the tape gateway type.</p>"
    },
    "DeleteTapeArchive":{
      "name":"DeleteTapeArchive",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteTapeArchiveInput"},
      "output":{"shape":"DeleteTapeArchiveOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes the specified virtual tape from the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p>"
    },
    "DeleteVolume":{
      "name":"DeleteVolume",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteVolumeInput"},
      "output":{"shape":"DeleteVolumeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Deletes the specified storage volume that you previously created using the <a>CreateCachediSCSIVolume</a> or <a>CreateStorediSCSIVolume</a> API. This operation is only supported in the cached volume and stored volume types. For stored volume gateways, the local disk that was configured as the storage volume is not deleted. You can reuse the local disk to create another storage volume. </p> <p>Before you delete a volume, make sure there are no iSCSI connections to the volume you are deleting. You should also make sure there is no snapshot in progress. You can use the Amazon Elastic Compute Cloud (Amazon EC2) API to query snapshots on the volume you are deleting and check the snapshot status. For more information, go to <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html\">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> <p>In the request, you must provide the Amazon Resource Name (ARN) of the storage volume you want to delete.</p>"
    },
    "DescribeBandwidthRateLimit":{
      "name":"DescribeBandwidthRateLimit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeBandwidthRateLimitInput"},
      "output":{"shape":"DescribeBandwidthRateLimitOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set, which means no bandwidth rate limiting is in effect.</p> <p>This operation only returns a value for a bandwidth rate limit only if the limit is set. If no limits are set for the gateway, then this operation returns only the gateway ARN in the response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>"
    },
    "DescribeCache":{
      "name":"DescribeCache",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCacheInput"},
      "output":{"shape":"DescribeCacheOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns information about the cache of a gateway. This operation is only supported in the cached volume, tape and file gateway types.</p> <p>The response includes disk IDs that are configured as cache, and it includes the amount of cache allocated and used.</p>"
    },
    "DescribeCachediSCSIVolumes":{
      "name":"DescribeCachediSCSIVolumes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeCachediSCSIVolumesInput"},
      "output":{"shape":"DescribeCachediSCSIVolumesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns a description of the gateway volumes specified in the request. This operation is only supported in the cached volume gateway types.</p> <p>The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume Amazon Resource Name (ARN).</p>"
    },
    "DescribeChapCredentials":{
      "name":"DescribeChapCredentials",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeChapCredentialsInput"},
      "output":{"shape":"DescribeChapCredentialsOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.</p>"
    },
    "DescribeGatewayInformation":{
      "name":"DescribeGatewayInformation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeGatewayInformationInput"},
      "output":{"shape":"DescribeGatewayInformationOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not). To specify which gateway to describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>"
    },
    "DescribeMaintenanceStartTime":{
      "name":"DescribeMaintenanceStartTime",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeMaintenanceStartTimeInput"},
      "output":{"shape":"DescribeMaintenanceStartTimeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone.</p>"
    },
    "DescribeNFSFileShares":{
      "name":"DescribeNFSFileShares",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeNFSFileSharesInput"},
      "output":{"shape":"DescribeNFSFileSharesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Gets a description for one or more Network File System (NFS) file shares from a file gateway. This operation is only supported for file gateways.</p>"
    },
    "DescribeSMBFileShares":{
      "name":"DescribeSMBFileShares",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSMBFileSharesInput"},
      "output":{"shape":"DescribeSMBFileSharesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Gets a description for one or more Server Message Block (SMB) file shares from a file gateway. This operation is only supported for file gateways.</p>"
    },
    "DescribeSMBSettings":{
      "name":"DescribeSMBSettings",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSMBSettingsInput"},
      "output":{"shape":"DescribeSMBSettingsOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Gets a description of a Server Message Block (SMB) file share settings from a file gateway. This operation is only supported for file gateways.</p>"
    },
    "DescribeSnapshotSchedule":{
      "name":"DescribeSnapshotSchedule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeSnapshotScheduleInput"},
      "output":{"shape":"DescribeSnapshotScheduleOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule information includes intervals at which snapshots are automatically initiated on the volume. This operation is only supported in the cached volume and stored volume types.</p>"
    },
    "DescribeStorediSCSIVolumes":{
      "name":"DescribeStorediSCSIVolumes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeStorediSCSIVolumesInput"},
      "output":{"shape":"DescribeStorediSCSIVolumesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns the description of the gateway volumes specified in the request. The list of gateway volumes in the request must be from one gateway. In the response Amazon Storage Gateway returns volume information sorted by volume ARNs. This operation is only supported in stored volume gateway type.</p>"
    },
    "DescribeTapeArchives":{
      "name":"DescribeTapeArchives",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTapeArchivesInput"},
      "output":{"shape":"DescribeTapeArchivesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns a description of specified virtual tapes in the virtual tape shelf (VTS). This operation is only supported in the tape gateway type.</p> <p>If a specific <code>TapeARN</code> is not specified, AWS Storage Gateway returns a description of all virtual tapes found in the VTS associated with your account.</p>"
    },
    "DescribeTapeRecoveryPoints":{
      "name":"DescribeTapeRecoveryPoints",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTapeRecoveryPointsInput"},
      "output":{"shape":"DescribeTapeRecoveryPointsOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns a list of virtual tape recovery points that are available for the specified tape gateway.</p> <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.</p>"
    },
    "DescribeTapes":{
      "name":"DescribeTapes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTapesInput"},
      "output":{"shape":"DescribeTapesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a <code>TapeARN</code> is not specified, returns a description of all virtual tapes associated with the specified gateway. This operation is only supported in the tape gateway type.</p>"
    },
    "DescribeUploadBuffer":{
      "name":"DescribeUploadBuffer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeUploadBufferInput"},
      "output":{"shape":"DescribeUploadBufferOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns information about the upload buffer of a gateway. This operation is supported for the stored volume, cached volume and tape gateway types.</p> <p>The response includes disk IDs that are configured as upload buffer space, and it includes the amount of upload buffer space allocated and used.</p>"
    },
    "DescribeVTLDevices":{
      "name":"DescribeVTLDevices",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeVTLDevicesInput"},
      "output":{"shape":"DescribeVTLDevicesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns a description of virtual tape library (VTL) devices for the specified tape gateway. In the response, AWS Storage Gateway returns VTL device information.</p> <p>This operation is only supported in the tape gateway type.</p>"
    },
    "DescribeWorkingStorage":{
      "name":"DescribeWorkingStorage",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeWorkingStorageInput"},
      "output":{"shape":"DescribeWorkingStorageOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns information about the working storage of a gateway. This operation is only supported in the stored volumes gateway type. This operation is deprecated in cached volumes API version (20120630). Use DescribeUploadBuffer instead.</p> <note> <p>Working storage is also referred to as upload buffer. You can also use the DescribeUploadBuffer operation to add upload buffer to a stored volume gateway.</p> </note> <p>The response includes disk IDs that are configured as working storage, and it includes the amount of working storage allocated and used.</p>"
    },
    "DisableGateway":{
      "name":"DisableGateway",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisableGatewayInput"},
      "output":{"shape":"DisableGatewayOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Disables a tape gateway when the gateway is no longer functioning. For example, if your gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p> <p>Use this operation for a tape gateway that is not reachable or not functioning. This operation is only supported in the tape gateway type.</p> <important> <p>Once a gateway is disabled it cannot be enabled.</p> </important>"
    },
    "JoinDomain":{
      "name":"JoinDomain",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"JoinDomainInput"},
      "output":{"shape":"JoinDomainOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Adds a file gateway to an Active Directory domain. This operation is only supported for file gateways that support the SMB file protocol.</p>"
    },
    "ListFileShares":{
      "name":"ListFileShares",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListFileSharesInput"},
      "output":{"shape":"ListFileSharesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Gets a list of the file shares for a specific file gateway, or the list of file shares that belong to the calling user account. This operation is only supported for file gateways.</p>"
    },
    "ListGateways":{
      "name":"ListGateways",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListGatewaysInput"},
      "output":{"shape":"ListGatewaysOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Lists gateways owned by an AWS account in a region specified in the request. The returned list is ordered by gateway Amazon Resource Name (ARN).</p> <p>By default, the operation returns a maximum of 100 gateways. This operation supports pagination that allows you to optionally reduce the number of gateways returned in a response.</p> <p>If you have more gateways than are returned in a response (that is, the response returns only a truncated list of your gateways), the response contains a marker that you can specify in your next request to fetch the next page of gateways.</p>"
    },
    "ListLocalDisks":{
      "name":"ListLocalDisks",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListLocalDisksInput"},
      "output":{"shape":"ListLocalDisksOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Returns a list of the gateway's local disks. To specify which gateway to describe, you use the Amazon Resource Name (ARN) of the gateway in the body of the request.</p> <p>The request returns a list of all disks, specifying which are configured as working storage, cache storage, or stored volume or not configured at all. The response includes a <code>DiskStatus</code> field. This field can have a value of present (the disk is available to use), missing (the disk is no longer connected to the gateway), or mismatch (the disk node is occupied by a disk that has incorrect metadata or the disk content is corrupted).</p>"
    },
    "ListTagsForResource":{
      "name":"ListTagsForResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTagsForResourceInput"},
      "output":{"shape":"ListTagsForResourceOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Lists the tags that have been added to the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway type.</p>"
    },
    "ListTapes":{
      "name":"ListTapes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListTapesInput"},
      "output":{"shape":"ListTapesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Lists virtual tapes in your virtual tape library (VTL) and your virtual tape shelf (VTS). You specify the tapes to list by specifying one or more tape Amazon Resource Names (ARNs). If you don't specify a tape ARN, the operation lists all virtual tapes in both your VTL and VTS.</p> <p>This operation supports pagination. By default, the operation returns a maximum of up to 100 tapes. You can optionally specify the <code>Limit</code> parameter in the body to limit the number of tapes in the response. If the number of tapes returned in the response is truncated, the response includes a <code>Marker</code> element that you can use in your subsequent request to retrieve the next set of tapes. This operation is only supported in the tape gateway type.</p>"
    },
    "ListVolumeInitiators":{
      "name":"ListVolumeInitiators",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListVolumeInitiatorsInput"},
      "output":{"shape":"ListVolumeInitiatorsOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Lists iSCSI initiators that are connected to a volume. You can use this operation to determine whether a volume is being used or not. This operation is only supported in the cached volume and stored volume gateway types.</p>"
    },
    "ListVolumeRecoveryPoints":{
      "name":"ListVolumeRecoveryPoints",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListVolumeRecoveryPointsInput"},
      "output":{"shape":"ListVolumeRecoveryPointsOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Lists the recovery points for a specified gateway. This operation is only supported in the cached volume gateway type.</p> <p>Each cache volume has one recovery point. A volume recovery point is a point in time at which all data of the volume is consistent and from which you can create a snapshot or clone a new cached volume from a source volume. To create a snapshot from a volume recovery point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>"
    },
    "ListVolumes":{
      "name":"ListVolumes",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ListVolumesInput"},
      "output":{"shape":"ListVolumesOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The response includes only the volume ARNs. If you want additional volume information, use the <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p> <p>The operation supports pagination. By default, the operation returns a maximum of up to 100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit the number of volumes in the response. If the number of volumes returned in the response is truncated, the response includes a Marker field. You can use this Marker value in your subsequent request to retrieve the next set of volumes. This operation is only supported in the cached volume and stored volume gateway types.</p>"
    },
    "NotifyWhenUploaded":{
      "name":"NotifyWhenUploaded",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"NotifyWhenUploadedInput"},
      "output":{"shape":"NotifyWhenUploadedOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Sends you notification through CloudWatch Events when all files written to your NFS file share have been uploaded to Amazon S3.</p> <p>AWS Storage Gateway can send a notification through Amazon CloudWatch Events when all files written to your file share up to that point in time have been uploaded to Amazon S3. These files include files written to the NFS file share up to the time that you make a request for notification. When the upload is done, Storage Gateway sends you notification through an Amazon CloudWatch Event. You can configure CloudWatch Events to send the notification through event targets such as Amazon SNS or AWS Lambda function. This operation is only supported for file gateways.</p> <p>For more information, see Getting File Upload Notification in the Storage Gateway User Guide (https://docs.aws.amazon.com/storagegateway/latest/userguide/monitoring-file-gateway.html#get-upload-notification). </p>"
    },
    "RefreshCache":{
      "name":"RefreshCache",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RefreshCacheInput"},
      "output":{"shape":"RefreshCacheOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Refreshes the cache for the specified file share. This operation finds objects in the Amazon S3 bucket that were added, removed or replaced since the gateway last listed the bucket's contents and cached the results. This operation is only supported in the file gateway type.</p>"
    },
    "RemoveTagsFromResource":{
      "name":"RemoveTagsFromResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RemoveTagsFromResourceInput"},
      "output":{"shape":"RemoveTagsFromResourceOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Removes one or more tags from the specified resource. This operation is only supported in the cached volume, stored volume and tape gateway types.</p>"
    },
    "ResetCache":{
      "name":"ResetCache",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ResetCacheInput"},
      "output":{"shape":"ResetCacheOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage. If your cache disk encounters a error, the gateway prevents read and write operations on virtual tapes in the gateway. For example, an error can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the gateway loses its cache storage. At this point you can reconfigure the disks as cache disks. This operation is only supported in the cached volume and tape types.</p> <important> <p>If the cache disk you are resetting contains data that has not been uploaded to Amazon S3 yet, that data can be lost. After you reset cache disks, there will be no configured cache disks left in the gateway, so you must configure at least one new cache disk for your gateway to function properly.</p> </important>"
    },
    "RetrieveTapeArchive":{
      "name":"RetrieveTapeArchive",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RetrieveTapeArchiveInput"},
      "output":{"shape":"RetrieveTapeArchiveOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway. Virtual tapes archived in the VTS are not associated with any gateway. However after a tape is retrieved, it is associated with a gateway, even though it is also listed in the VTS, that is, archive. This operation is only supported in the tape gateway type.</p> <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to another gateway. You must archive the tape again before you can retrieve it to another gateway. This operation is only supported in the tape gateway type.</p>"
    },
    "RetrieveTapeRecoveryPoint":{
      "name":"RetrieveTapeRecoveryPoint",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"RetrieveTapeRecoveryPointInput"},
      "output":{"shape":"RetrieveTapeRecoveryPointOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Retrieves the recovery point for the specified virtual tape. This operation is only supported in the tape gateway type.</p> <p>A recovery point is a point in time view of a virtual tape at which all the data on the tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway.</p> <note> <p>The virtual tape can be retrieved to only one gateway. The retrieved tape is read-only. The virtual tape can be retrieved to only a tape gateway. There is no charge for retrieving recovery points.</p> </note>"
    },
    "SetLocalConsolePassword":{
      "name":"SetLocalConsolePassword",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetLocalConsolePasswordInput"},
      "output":{"shape":"SetLocalConsolePasswordOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Sets the password for your VM local console. When you log in to the local console for the first time, you log in to the VM with the default credentials. We recommend that you set a new password. You don't need to know the default password to set a new password.</p>"
    },
    "SetSMBGuestPassword":{
      "name":"SetSMBGuestPassword",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"SetSMBGuestPasswordInput"},
      "output":{"shape":"SetSMBGuestPasswordOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code> user is the user when the authentication method for the file share is set to <code>GuestAccess</code>.</p>"
    },
    "ShutdownGateway":{
      "name":"ShutdownGateway",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ShutdownGatewayInput"},
      "output":{"shape":"ShutdownGatewayOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource Name (ARN) of the gateway in the body of your request.</p> <p>The operation shuts down the gateway service component running in the gateway's virtual machine (VM) and not the host VM.</p> <note> <p>If you want to shut down the VM, it is recommended that you first shut down the gateway component in the VM to avoid unpredictable conditions.</p> </note> <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>. Your applications cannot read from or write to the gateway's storage volumes, and there are no snapshots taken.</p> <note> <p>When you make a shutdown request, you will get a <code>200 OK</code> success response immediately. However, it might take some time for the gateway to shut down. You can call the <a>DescribeGatewayInformation</a> API to check the status. For more information, see <a>ActivateGateway</a>.</p> </note> <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the gateway.</p>"
    },
    "StartGateway":{
      "name":"StartGateway",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"StartGatewayInput"},
      "output":{"shape":"StartGatewayOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>). After the gateway starts, you can then make other API calls, your applications can read from or write to the gateway's storage volumes and you will be able to take snapshot backups.</p> <note> <p>When you make a request, you will get a 200 OK success response immediately. However, it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any additional API calls. For more information, see <a>ActivateGateway</a>.</p> </note> <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in your request.</p>"
    },
    "UpdateBandwidthRateLimit":{
      "name":"UpdateBandwidthRateLimit",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateBandwidthRateLimitInput"},
      "output":{"shape":"UpdateBandwidthRateLimitOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates the bandwidth rate limits of a gateway. You can update both the upload and download bandwidth rate limit or specify only one of the two. If you don't set a bandwidth rate limit, the existing rate limit remains.</p> <p>By default, a gateway's bandwidth rate limits are not set. If you don't set any limit, the gateway does not have any limitations on its bandwidth usage and could potentially use the maximum available bandwidth.</p> <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p>"
    },
    "UpdateChapCredentials":{
      "name":"UpdateChapCredentials",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateChapCredentialsInput"},
      "output":{"shape":"UpdateChapCredentialsOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates the Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified iSCSI target. By default, a gateway does not have CHAP enabled; however, for added security, you might use it.</p> <important> <p>When you update CHAP credentials, all existing connections on the target are closed and initiators must reconnect with the new credentials.</p> </important>"
    },
    "UpdateGatewayInformation":{
      "name":"UpdateGatewayInformation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateGatewayInformationInput"},
      "output":{"shape":"UpdateGatewayInformationOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates a gateway's metadata, which includes the gateway's name and time zone. To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in your request.</p> <note> <p>For Gateways activated after September 2, 2015, the gateway's ARN contains the gateway ID rather than the gateway name. However, changing the name of the gateway has no effect on the gateway's ARN.</p> </note>"
    },
    "UpdateGatewaySoftwareNow":{
      "name":"UpdateGatewaySoftwareNow",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateGatewaySoftwareNowInput"},
      "output":{"shape":"UpdateGatewaySoftwareNowOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete. You can call <a>DescribeGatewayInformation</a> to verify the gateway is in the <code>STATE_RUNNING</code> state.</p> </note> <important> <p>A software update forces a system restart of your gateway. You can minimize the chance of any disruption to your applications by increasing your iSCSI Initiators' timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and Linux, see <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings\">Customizing Your Windows iSCSI Settings</a> and <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings\">Customizing Your Linux iSCSI Settings</a>, respectively.</p> </important>"
    },
    "UpdateMaintenanceStartTime":{
      "name":"UpdateMaintenanceStartTime",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateMaintenanceStartTimeInput"},
      "output":{"shape":"UpdateMaintenanceStartTimeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates a gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone.</p>"
    },
    "UpdateNFSFileShare":{
      "name":"UpdateNFSFileShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateNFSFileShareInput"},
      "output":{"shape":"UpdateNFSFileShareOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates a Network File System (NFS) file share. This operation is only supported in the file gateway type.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null.</p> </note> <p>Updates the following file share setting:</p> <ul> <li> <p>Default storage class for your S3 bucket</p> </li> <li> <p>Metadata defaults for your S3 bucket</p> </li> <li> <p>Allowed NFS clients for your file share</p> </li> <li> <p>Squash settings</p> </li> <li> <p>Write status of your file share</p> </li> </ul> <note> <p>To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported in file gateways.</p> </note>"
    },
    "UpdateSMBFileShare":{
      "name":"UpdateSMBFileShare",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateSMBFileShareInput"},
      "output":{"shape":"UpdateSMBFileShareOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates a Server Message Block (SMB) file share.</p> <note> <p>To leave a file share field unchanged, set the corresponding input field to null. This operation is only supported for file gateways.</p> </note> <important> <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable you to create a file share. Make sure that AWS STS is activated in the AWS Region you are creating your file gateway in. If AWS STS is not activated in this AWS Region, activate it. For information about how to activate AWS STS, see <a href=\"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html\">Activating and Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User Guide.</i> </p> <p>File gateways don't support creating hard or symbolic links on a file share.</p> </important>"
    },
    "UpdateSnapshotSchedule":{
      "name":"UpdateSnapshotSchedule",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateSnapshotScheduleInput"},
      "output":{"shape":"UpdateSnapshotScheduleOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates a snapshot schedule configured for a gateway volume. This operation is only supported in the cached volume and stored volume gateway types.</p> <p>The default snapshot schedule for volume is once every 24 hours, starting at the creation time of the volume. You can use this API to change the snapshot schedule configured for the volume.</p> <p>In the request you must identify the gateway volume whose snapshot schedule you want to update, and the schedule information, including when you want the snapshot to begin on a day and the frequency (in hours) of snapshots.</p>"
    },
    "UpdateVTLDeviceType":{
      "name":"UpdateVTLDeviceType",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateVTLDeviceTypeInput"},
      "output":{"shape":"UpdateVTLDeviceTypeOutput"},
      "errors":[
        {"shape":"InvalidGatewayRequestException"},
        {"shape":"InternalServerError"}
      ],
      "documentation":"<p>Updates the type of medium changer in a tape gateway. When you activate a tape gateway, you select a medium changer type for the tape gateway. This operation enables you to select a different type of medium changer after a tape gateway is activated. This operation is only supported in the tape gateway type.</p>"
    }
  },
  "shapes":{
    "ActivateGatewayInput":{
      "type":"structure",
      "required":[
        "ActivationKey",
        "GatewayName",
        "GatewayTimezone",
        "GatewayRegion"
      ],
      "members":{
        "ActivationKey":{
          "shape":"ActivationKey",
          "documentation":"<p>Your gateway activation key. You can obtain the activation key by sending an HTTP GET request with redirects enabled to the gateway IP address (port 80). The redirect URL returned in the response provides you the activation key for your gateway in the query string parameter <code>activationKey</code>. It may also include other activation-related parameters, however, these are merely defaults -- the arguments you pass to the <code>ActivateGateway</code> API call determine the actual configuration of your gateway. </p> <p>For more information, see https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html in the Storage Gateway User Guide.</p>"
        },
        "GatewayName":{
          "shape":"GatewayName",
          "documentation":"<p>The name you configured for your gateway.</p>"
        },
        "GatewayTimezone":{
          "shape":"GatewayTimezone",
          "documentation":"<p>A value that indicates the time zone you want to set for the gateway. The time zone is of the format \"GMT-hr:mm\" or \"GMT+hr:mm\". For example, GMT-4:00 indicates the time is 4 hours behind GMT. GMT+2:00 indicates the time is 2 hours ahead of GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.</p>"
        },
        "GatewayRegion":{
          "shape":"RegionId",
          "documentation":"<p>A value that indicates the region where you want to store your data. The gateway region specified must be the same region as the region in your <code>Host</code> header in the request. For more information about available regions and endpoints for AWS Storage Gateway, see <a href=\"http://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region\">Regions and Endpoints</a> in the <i>Amazon Web Services Glossary</i>.</p> <p> Valid Values: \"us-east-1\", \"us-east-2\", \"us-west-1\", \"us-west-2\", \"ca-central-1\", \"eu-west-1\", \"eu-central-1\", \"eu-west-2\", \"eu-west-3\", \"ap-northeast-1\", \"ap-northeast-2\", \"ap-southeast-1\", \"ap-southeast-2\", \"ap-south-1\", \"sa-east-1\"</p>"
        },
        "GatewayType":{
          "shape":"GatewayType",
          "documentation":"<p>A value that defines the type of gateway to activate. The type specified is critical to all later functions of the gateway and cannot be changed after activation. The default value is <code>STORED</code>. </p> <p> Valid Values: \"STORED\", \"CACHED\", \"VTL\", \"FILE_S3\"</p>"
        },
        "TapeDriveType":{
          "shape":"TapeDriveType",
          "documentation":"<p>The value that indicates the type of tape drive to use for tape gateway. This field is optional.</p> <p> Valid Values: \"IBM-ULT3580-TD5\" </p>"
        },
        "MediumChangerType":{
          "shape":"MediumChangerType",
          "documentation":"<p>The value that indicates the type of medium changer to use for tape gateway. This field is optional.</p> <p> Valid Values: \"STK-L700\", \"AWS-Gateway-VTL\"</p>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>ActivateGatewayInput$ActivationKey</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayName</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayRegion</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayTimezone</a> </p> </li> <li> <p> <a>ActivateGatewayInput$GatewayType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$TapeDriveType</a> </p> </li> <li> <p> <a>ActivateGatewayInput$MediumChangerType</a> </p> </li> </ul>"
    },
    "ActivateGatewayOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>AWS Storage Gateway returns the Amazon Resource Name (ARN) of the activated gateway. It is a string made of information such as your account, gateway name, and region. This ARN is used to reference the gateway in other API operations as well as resource-based authorization.</p> <note> <p>For gateways activated prior to September 02, 2015, the gateway ARN contains the gateway name rather than the gateway ID. Changing the name of the gateway has no effect on the gateway ARN.</p> </note>"
    },
    "ActivationKey":{
      "type":"string",
      "max":50,
      "min":1
    },
    "AddCacheInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "DiskIds"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DiskIds":{"shape":"DiskIds"}
      }
    },
    "AddCacheOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "AddTagsToResourceInput":{
      "type":"structure",
      "required":[
        "ResourceARN",
        "Tags"
      ],
      "members":{
        "ResourceARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>The key-value pair that represents the tag you want to add to the resource. The value can be an empty string.</p> <note> <p>Valid characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following special characters: + - = . _ : / @.</p> </note>"
        }
      },
      "documentation":"<p>AddTagsToResourceInput</p>"
    },
    "AddTagsToResourceOutput":{
      "type":"structure",
      "members":{
        "ResourceARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource you want to add tags to.</p>"
        }
      },
      "documentation":"<p>AddTagsToResourceOutput</p>"
    },
    "AddUploadBufferInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "DiskIds"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DiskIds":{"shape":"DiskIds"}
      }
    },
    "AddUploadBufferOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "AddWorkingStorageInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "DiskIds"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DiskIds":{
          "shape":"DiskIds",
          "documentation":"<p>An array of strings that identify disks that are to be configured as working storage. Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs from the <a>ListLocalDisks</a> API.</p>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>AddWorkingStorageInput$DiskIds</a> </p> </li> </ul>"
    },
    "AddWorkingStorageOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway for which working storage was configured.</p>"
    },
    "Authentication":{
      "type":"string",
      "documentation":"<p>The authentication method of the file share.</p> <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The default is <code>ActiveDirectory</code>.</p>",
      "max":15,
      "min":5
    },
    "BandwidthDownloadRateLimit":{
      "type":"long",
      "min":102400
    },
    "BandwidthType":{
      "type":"string",
      "max":25,
      "min":3
    },
    "BandwidthUploadRateLimit":{
      "type":"long",
      "min":51200
    },
    "Boolean":{"type":"boolean"},
    "CachediSCSIVolume":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the storage volume.</p>"
        },
        "VolumeId":{
          "shape":"VolumeId",
          "documentation":"<p>The unique identifier of the volume, e.g. vol-AE4B946D.</p>"
        },
        "VolumeType":{
          "shape":"VolumeType",
          "documentation":"<p>One of the VolumeType enumeration values that describes the type of the volume.</p>"
        },
        "VolumeStatus":{
          "shape":"VolumeStatus",
          "documentation":"<p>One of the VolumeStatus values that indicates the state of the storage volume.</p>"
        },
        "VolumeSizeInBytes":{
          "shape":"long",
          "documentation":"<p>The size, in bytes, of the volume capacity.</p>"
        },
        "VolumeProgress":{
          "shape":"DoubleObject",
          "documentation":"<p>Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the cached volume is not restoring or bootstrapping.</p>"
        },
        "SourceSnapshotId":{
          "shape":"SnapshotId",
          "documentation":"<p>If the cached volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.</p>"
        },
        "VolumeiSCSIAttributes":{
          "shape":"VolumeiSCSIAttributes",
          "documentation":"<p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.</p>"
        },
        "CreatedDate":{
          "shape":"CreatedDate",
          "documentation":"<p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this time stamp.</p>"
        },
        "VolumeUsedInBytes":{
          "shape":"VolumeUsedInBytes",
          "documentation":"<p>The size of the data stored on the volume in bytes.</p> <note> <p>This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.</p> </note>"
        },
        "KMSKey":{"shape":"KMSKey"}
      },
      "documentation":"<p>Describes an iSCSI cached volume.</p>"
    },
    "CachediSCSIVolumes":{
      "type":"list",
      "member":{"shape":"CachediSCSIVolume"}
    },
    "CancelArchivalInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "TapeARN"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel archiving for.</p>"
        }
      },
      "documentation":"<p>CancelArchivalInput</p>"
    },
    "CancelArchivalOutput":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape for which archiving was canceled.</p>"
        }
      },
      "documentation":"<p>CancelArchivalOutput</p>"
    },
    "CancelRetrievalInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "TapeARN"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape you want to cancel retrieval for.</p>"
        }
      },
      "documentation":"<p>CancelRetrievalInput</p>"
    },
    "CancelRetrievalOutput":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape for which retrieval was canceled.</p>"
        }
      },
      "documentation":"<p>CancelRetrievalOutput</p>"
    },
    "ChapCredentials":{
      "type":"list",
      "member":{"shape":"ChapInfo"}
    },
    "ChapInfo":{
      "type":"structure",
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume.</p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>"
        },
        "SecretToAuthenticateInitiator":{
          "shape":"ChapSecret",
          "documentation":"<p>The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.</p>"
        },
        "InitiatorName":{
          "shape":"IqnName",
          "documentation":"<p>The iSCSI initiator that connects to the target.</p>"
        },
        "SecretToAuthenticateTarget":{
          "shape":"ChapSecret",
          "documentation":"<p>The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).</p>"
        }
      },
      "documentation":"<p>Describes Challenge-Handshake Authentication Protocol (CHAP) information that supports authentication between your gateway and iSCSI initiators.</p>"
    },
    "ChapSecret":{
      "type":"string",
      "max":100,
      "min":1
    },
    "ClientToken":{
      "type":"string",
      "max":100,
      "min":5
    },
    "CreateCachediSCSIVolumeInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "VolumeSizeInBytes",
        "TargetName",
        "NetworkInterfaceId",
        "ClientToken"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "VolumeSizeInBytes":{
          "shape":"long",
          "documentation":"<p>The size of the volume in bytes.</p>"
        },
        "SnapshotId":{
          "shape":"SnapshotId",
          "documentation":"<p>The snapshot ID (e.g. \"snap-1122aabb\") of the snapshot to restore as the new cached volume. Specify this field if you want to create the iSCSI storage volume from a snapshot otherwise do not include this field. To list snapshots for your account use <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html\">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>"
        },
        "TargetName":{
          "shape":"TargetName",
          "documentation":"<p>The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes of a gateway.</p>"
        },
        "SourceVolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The ARN for an existing volume. Specifying this ARN makes the new volume into an exact copy of the specified existing volume's latest recovery point. The <code>VolumeSizeInBytes</code> value for this new volume must be equal to or larger than the size of the existing volume, in bytes.</p>"
        },
        "NetworkInterfaceId":{
          "shape":"NetworkInterfaceId",
          "documentation":"<p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of the network interfaces available on a gateway.</p> <p> Valid Values: A valid IP address.</p>"
        },
        "ClientToken":{
          "shape":"ClientToken",
          "documentation":"<p>A unique identifier that you use to retry a request. If you retry a request, use the same <code>ClientToken</code> you specified in the initial request.</p>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>"
        }
      }
    },
    "CreateCachediSCSIVolumeOutput":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the configured volume.</p>"
        },
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>he Amazon Resource Name (ARN) of the volume target that includes the iSCSI name that initiators can use to connect to the target.</p>"
        }
      }
    },
    "CreateNFSFileShareInput":{
      "type":"structure",
      "required":[
        "ClientToken",
        "GatewayARN",
        "Role",
        "LocationARN"
      ],
      "members":{
        "ClientToken":{
          "shape":"ClientToken",
          "documentation":"<p>A unique string value that you supply that is used by file gateway to ensure idempotent file share creation.</p>"
        },
        "NFSFileShareDefaults":{
          "shape":"NFSFileShareDefaults",
          "documentation":"<p>File share default values. Optional.</p>"
        },
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the file gateway on which you want to create a file share.</p>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>"
        },
        "Role":{
          "shape":"Role",
          "documentation":"<p>The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage. </p>"
        },
        "LocationARN":{
          "shape":"LocationARN",
          "documentation":"<p>The ARN of the backed storage used for storing file data. </p>"
        },
        "DefaultStorageClass":{
          "shape":"StorageClass",
          "documentation":"<p>The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value <code>S3_STANDARD</code> is used. Optional.</p>"
        },
        "ObjectACL":{
          "shape":"ObjectACL",
          "documentation":"<p>A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is \"private\".</p>"
        },
        "ClientList":{
          "shape":"FileShareClientList",
          "documentation":"<p>The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. </p>"
        },
        "Squash":{
          "shape":"Squash",
          "documentation":"<p>Maps a user to anonymous user. Valid options are the following: </p> <ul> <li> <p> <code>RootSquash</code> - Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code> - No one is mapped to anonymous user</p> </li> <li> <p> <code>AllSquash</code> - Everyone is mapped to anonymous user.</p> </li> </ul>"
        },
        "ReadOnly":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.</p>"
        },
        "GuessMIMETypeEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.</p>"
        },
        "RequesterPays":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the access control list permission for objects in the Amazon S3 bucket that a file gateway puts objects into. The default value is <code>private</code>.</p>"
        }
      },
      "documentation":"<p>CreateNFSFileShareInput</p>"
    },
    "CreateNFSFileShareOutput":{
      "type":"structure",
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the newly created file share. </p>"
        }
      },
      "documentation":"<p>CreateNFSFileShareOutput</p>"
    },
    "CreateSMBFileShareInput":{
      "type":"structure",
      "required":[
        "ClientToken",
        "GatewayARN",
        "Role",
        "LocationARN"
      ],
      "members":{
        "ClientToken":{
          "shape":"ClientToken",
          "documentation":"<p>A unique string value that you supply that is used by file gateway to ensure idempotent file share creation.</p>"
        },
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the file gateway on which you want to create a file share.</p>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>"
        },
        "Role":{
          "shape":"Role",
          "documentation":"<p>The ARN of the AWS Identity and Access Management (IAM) role that a file gateway assumes when it accesses the underlying storage. </p>"
        },
        "LocationARN":{
          "shape":"LocationARN",
          "documentation":"<p>The ARN of the backed storage used for storing file data. </p>"
        },
        "DefaultStorageClass":{
          "shape":"StorageClass",
          "documentation":"<p>The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value <code>S3_STANDARD</code> is used. Optional.</p>"
        },
        "ObjectACL":{
          "shape":"ObjectACL",
          "documentation":"<p>A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is \"private\".</p>"
        },
        "ReadOnly":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.</p>"
        },
        "GuessMIMETypeEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.</p>"
        },
        "RequesterPays":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the access control list permission for objects in the Amazon S3 bucket that a file gateway puts objects into. The default value is <code>private</code>.</p>"
        },
        "ValidUserList":{
          "shape":"FileShareUserList",
          "documentation":"<p>A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>"
        },
        "InvalidUserList":{
          "shape":"FileShareUserList",
          "documentation":"<p>A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>"
        },
        "Authentication":{
          "shape":"Authentication",
          "documentation":"<p>The authentication method that users use to access the file share.</p> <p>Valid values are <code>ActiveDirectory</code> or <code>GuestAccess</code>. The default is <code>ActiveDirectory</code>.</p>"
        }
      },
      "documentation":"<p>CreateSMBFileShareInput</p>"
    },
    "CreateSMBFileShareOutput":{
      "type":"structure",
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the newly created file share. </p>"
        }
      },
      "documentation":"<p>CreateSMBFileShareOutput</p>"
    },
    "CreateSnapshotFromVolumeRecoveryPointInput":{
      "type":"structure",
      "required":[
        "VolumeARN",
        "SnapshotDescription"
      ],
      "members":{
        "VolumeARN":{"shape":"VolumeARN"},
        "SnapshotDescription":{"shape":"SnapshotDescription"}
      }
    },
    "CreateSnapshotFromVolumeRecoveryPointOutput":{
      "type":"structure",
      "members":{
        "SnapshotId":{"shape":"SnapshotId"},
        "VolumeARN":{"shape":"VolumeARN"},
        "VolumeRecoveryPointTime":{"shape":"string"}
      }
    },
    "CreateSnapshotInput":{
      "type":"structure",
      "required":[
        "VolumeARN",
        "SnapshotDescription"
      ],
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.</p>"
        },
        "SnapshotDescription":{
          "shape":"SnapshotDescription",
          "documentation":"<p>Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store snapshots panel in the <b>Description</b> field, and in the AWS Storage Gateway snapshot <b>Details</b> pane, <b>Description</b> field</p>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateSnapshotInput$SnapshotDescription</a> </p> </li> <li> <p> <a>CreateSnapshotInput$VolumeARN</a> </p> </li> </ul>"
    },
    "CreateSnapshotOutput":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume of which the snapshot was taken.</p>"
        },
        "SnapshotId":{
          "shape":"SnapshotId",
          "documentation":"<p>The snapshot ID that is used to refer to the snapshot in future operations such as describing snapshots (Amazon Elastic Compute Cloud API <code>DescribeSnapshots</code>) or creating a volume from a snapshot (<a>CreateStorediSCSIVolume</a>).</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "CreateStorediSCSIVolumeInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "DiskId",
        "PreserveExistingData",
        "TargetName",
        "NetworkInterfaceId"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DiskId":{
          "shape":"DiskId",
          "documentation":"<p>The unique identifier for the gateway local disk that is configured as a stored volume. Use <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/API_ListLocalDisks.html\">ListLocalDisks</a> to list disk IDs for a gateway.</p>"
        },
        "SnapshotId":{
          "shape":"SnapshotId",
          "documentation":"<p>The snapshot ID (e.g. \"snap-1122aabb\") of the snapshot to restore as the new stored volume. Specify this field if you want to create the iSCSI storage volume from a snapshot otherwise do not include this field. To list snapshots for your account use <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-DescribeSnapshots.html\">DescribeSnapshots</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p>"
        },
        "PreserveExistingData":{
          "shape":"boolean",
          "documentation":"<p>Specify this field as true if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.</p> <p> Valid Values: true, false</p>"
        },
        "TargetName":{
          "shape":"TargetName",
          "documentation":"<p>The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume. The target name must be unique across all volumes of a gateway.</p>"
        },
        "NetworkInterfaceId":{
          "shape":"NetworkInterfaceId",
          "documentation":"<p>The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. Use <a>DescribeGatewayInformation</a> to get a list of the network interfaces available on a gateway.</p> <p> Valid Values: A valid IP address.</p>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) of the KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>CreateStorediSCSIVolumeInput$DiskId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$NetworkInterfaceId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$PreserveExistingData</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$SnapshotId</a> </p> </li> <li> <p> <a>CreateStorediSCSIVolumeInput$TargetName</a> </p> </li> </ul>"
    },
    "CreateStorediSCSIVolumeOutput":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the configured volume.</p>"
        },
        "VolumeSizeInBytes":{
          "shape":"long",
          "documentation":"<p>The size of the volume in bytes.</p>"
        },
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>he Amazon Resource Name (ARN) of the volume target that includes the iSCSI name that initiators can use to connect to the target.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "CreateTapeWithBarcodeInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "TapeSizeInBytes",
        "TapeBarcode"
      ],
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tape with. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>"
        },
        "TapeSizeInBytes":{
          "shape":"TapeSize",
          "documentation":"<p>The size, in bytes, of the virtual tape that you want to create.</p> <note> <p>The size must be aligned by gigabyte (1024*1024*1024 byte).</p> </note>"
        },
        "TapeBarcode":{
          "shape":"TapeBarcode",
          "documentation":"<p>The barcode that you want to assign to the tape.</p> <note> <p>Barcodes cannot be reused. This includes barcodes used for tapes that have been deleted.</p> </note>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS KMS Key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>"
        }
      },
      "documentation":"<p>CreateTapeWithBarcodeInput</p>"
    },
    "CreateTapeWithBarcodeOutput":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>A unique Amazon Resource Name (ARN) that represents the virtual tape that was created.</p>"
        }
      },
      "documentation":"<p>CreateTapeOutput</p>"
    },
    "CreateTapesInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "TapeSizeInBytes",
        "ClientToken",
        "NumTapesToCreate",
        "TapeBarcodePrefix"
      ],
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The unique Amazon Resource Name (ARN) that represents the gateway to associate the virtual tapes with. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>"
        },
        "TapeSizeInBytes":{
          "shape":"TapeSize",
          "documentation":"<p>The size, in bytes, of the virtual tapes that you want to create.</p> <note> <p>The size must be aligned by gigabyte (1024*1024*1024 byte).</p> </note>"
        },
        "ClientToken":{
          "shape":"ClientToken",
          "documentation":"<p>A unique identifier that you use to retry a request. If you retry a request, use the same <code>ClientToken</code> you specified in the initial request.</p> <note> <p>Using the same <code>ClientToken</code> prevents creating the tape multiple times.</p> </note>"
        },
        "NumTapesToCreate":{
          "shape":"NumTapesToCreate",
          "documentation":"<p>The number of virtual tapes that you want to create.</p>"
        },
        "TapeBarcodePrefix":{
          "shape":"TapeBarcodePrefix",
          "documentation":"<p>A prefix that you append to the barcode of the virtual tape you are creating. This prefix makes the barcode unique.</p> <note> <p>The prefix must be 1 to 4 characters in length and must be one of the uppercase letters from A to Z.</p> </note>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>"
        }
      },
      "documentation":"<p>CreateTapesInput</p>"
    },
    "CreateTapesOutput":{
      "type":"structure",
      "members":{
        "TapeARNs":{
          "shape":"TapeARNs",
          "documentation":"<p>A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that were created.</p>"
        }
      },
      "documentation":"<p>CreateTapeOutput</p>"
    },
    "CreatedDate":{"type":"timestamp"},
    "DayOfWeek":{
      "type":"integer",
      "max":6,
      "min":0
    },
    "DeleteBandwidthRateLimitInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "BandwidthType"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "BandwidthType":{
          "shape":"BandwidthType",
          "documentation":"<p>One of the BandwidthType values that indicates the gateway bandwidth rate limit to delete.</p> <p>Valid Values: <code>Upload</code>, <code>Download</code>, <code>All</code>.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DeleteBandwidthRateLimitInput$BandwidthType</a> </p> </li> </ul>"
    },
    "DeleteBandwidthRateLimitOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway whose bandwidth rate information was deleted.</p>"
    },
    "DeleteChapCredentialsInput":{
      "type":"structure",
      "required":[
        "TargetARN",
        "InitiatorName"
      ],
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for specified VolumeARN.</p>"
        },
        "InitiatorName":{
          "shape":"IqnName",
          "documentation":"<p>The iSCSI initiator that connects to the target.</p>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>DeleteChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>DeleteChapCredentialsInput$TargetARN</a> </p> </li> </ul>"
    },
    "DeleteChapCredentialsOutput":{
      "type":"structure",
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target.</p>"
        },
        "InitiatorName":{
          "shape":"IqnName",
          "documentation":"<p>The iSCSI initiator that connects to the target.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "DeleteFileShareInput":{
      "type":"structure",
      "required":["FileShareARN"],
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the file share to be deleted. </p>"
        },
        "ForceDelete":{
          "shape":"boolean",
          "documentation":"<p>If this value is set to true, the operation deletes a file share immediately and aborts all data uploads to AWS. Otherwise, the file share is not deleted until all data is uploaded to AWS. This process aborts the data upload process, and the file share enters the FORCE_DELETING status.</p>"
        }
      },
      "documentation":"<p>DeleteFileShareInput</p>"
    },
    "DeleteFileShareOutput":{
      "type":"structure",
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the deleted file share. </p>"
        }
      },
      "documentation":"<p>DeleteFileShareOutput</p>"
    },
    "DeleteGatewayInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the ID of the gateway to delete.</p>"
    },
    "DeleteGatewayOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the ID of the deleted gateway.</p>"
    },
    "DeleteSnapshotScheduleInput":{
      "type":"structure",
      "required":["VolumeARN"],
      "members":{
        "VolumeARN":{"shape":"VolumeARN"}
      }
    },
    "DeleteSnapshotScheduleOutput":{
      "type":"structure",
      "members":{
        "VolumeARN":{"shape":"VolumeARN"}
      }
    },
    "DeleteTapeArchiveInput":{
      "type":"structure",
      "required":["TapeARN"],
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape to delete from the virtual tape shelf (VTS).</p>"
        }
      },
      "documentation":"<p>DeleteTapeArchiveInput</p>"
    },
    "DeleteTapeArchiveOutput":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual tape shelf (VTS).</p>"
        }
      },
      "documentation":"<p>DeleteTapeArchiveOutput</p>"
    },
    "DeleteTapeInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "TapeARN"
      ],
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The unique Amazon Resource Name (ARN) of the gateway that the virtual tape to delete is associated with. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>"
        },
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape to delete.</p>"
        }
      },
      "documentation":"<p>DeleteTapeInput</p>"
    },
    "DeleteTapeOutput":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the deleted virtual tape.</p>"
        }
      },
      "documentation":"<p>DeleteTapeOutput</p>"
    },
    "DeleteVolumeInput":{
      "type":"structure",
      "required":["VolumeARN"],
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the <a>DeleteVolumeInput$VolumeARN</a> to delete.</p>"
    },
    "DeleteVolumeOutput":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you provided in the request.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the of the storage volume that was deleted</p>"
    },
    "DescribeBandwidthRateLimitInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway.</p>"
    },
    "DescribeBandwidthRateLimitOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "AverageUploadRateLimitInBitsPerSec":{
          "shape":"BandwidthUploadRateLimit",
          "documentation":"<p>The average upload bandwidth rate limit in bits per second. This field does not appear in the response if the upload rate limit is not set.</p>"
        },
        "AverageDownloadRateLimitInBitsPerSec":{
          "shape":"BandwidthDownloadRateLimit",
          "documentation":"<p>The average download bandwidth rate limit in bits per second. This field does not appear in the response if the download rate limit is not set.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "DescribeCacheInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "DescribeCacheOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DiskIds":{"shape":"DiskIds"},
        "CacheAllocatedInBytes":{"shape":"long"},
        "CacheUsedPercentage":{"shape":"double"},
        "CacheDirtyPercentage":{"shape":"double"},
        "CacheHitPercentage":{"shape":"double"},
        "CacheMissPercentage":{"shape":"double"}
      }
    },
    "DescribeCachediSCSIVolumesInput":{
      "type":"structure",
      "required":["VolumeARNs"],
      "members":{
        "VolumeARNs":{"shape":"VolumeARNs"}
      }
    },
    "DescribeCachediSCSIVolumesOutput":{
      "type":"structure",
      "members":{
        "CachediSCSIVolumes":{
          "shape":"CachediSCSIVolumes",
          "documentation":"<p>An array of objects where each object contains metadata about one cached volume.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "DescribeChapCredentialsInput":{
      "type":"structure",
      "required":["TargetARN"],
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for specified VolumeARN.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the Amazon Resource Name (ARN) of the iSCSI volume target.</p>"
    },
    "DescribeChapCredentialsOutput":{
      "type":"structure",
      "members":{
        "ChapCredentials":{
          "shape":"ChapCredentials",
          "documentation":"<p>An array of <a>ChapInfo</a> objects that represent CHAP credentials. Each object in the array contains CHAP credential information for one target-initiator pair. If no CHAP credentials are set, an empty array is returned. CHAP credential information is provided in a JSON object with the following fields:</p> <ul> <li> <p> <b>InitiatorName</b>: The iSCSI initiator that connects to the target.</p> </li> <li> <p> <b>SecretToAuthenticateInitiator</b>: The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.</p> </li> <li> <p> <b>SecretToAuthenticateTarget</b>: The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).</p> </li> <li> <p> <b>TargetARN</b>: The Amazon Resource Name (ARN) of the storage volume.</p> </li> </ul>"
        }
      },
      "documentation":"<p>A JSON object containing a .</p>"
    },
    "DescribeGatewayInformationInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the ID of the gateway.</p>"
    },
    "DescribeGatewayInformationOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "GatewayId":{
          "shape":"GatewayId",
          "documentation":"<p>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</p>"
        },
        "GatewayName":{
          "shape":"string",
          "documentation":"<p>The name you configured for your gateway.</p>"
        },
        "GatewayTimezone":{
          "shape":"GatewayTimezone",
          "documentation":"<p>A value that indicates the time zone configured for the gateway.</p>"
        },
        "GatewayState":{
          "shape":"GatewayState",
          "documentation":"<p>A value that indicates the operating state of the gateway.</p>"
        },
        "GatewayNetworkInterfaces":{
          "shape":"GatewayNetworkInterfaces",
          "documentation":"<p>A <a>NetworkInterface</a> array that contains descriptions of the gateway network interfaces.</p>"
        },
        "GatewayType":{
          "shape":"GatewayType",
          "documentation":"<p>The type of the gateway.</p>"
        },
        "NextUpdateAvailabilityDate":{
          "shape":"NextUpdateAvailabilityDate",
          "documentation":"<p>The date on which an update to the gateway is available. This date is in the time zone of the gateway. If the gateway is not available for an update this field is not returned in the response.</p>"
        },
        "LastSoftwareUpdate":{
          "shape":"LastSoftwareUpdate",
          "documentation":"<p>The date on which the last software update was applied to the gateway. If the gateway has never been updated, this field does not return a value in the response.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "DescribeMaintenanceStartTimeInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway.</p>"
    },
    "DescribeMaintenanceStartTimeOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "HourOfDay":{
          "shape":"HourOfDay",
          "documentation":"<p>The hour component of the maintenance start time represented as <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.</p>"
        },
        "MinuteOfHour":{
          "shape":"MinuteOfHour",
          "documentation":"<p>The minute component of the maintenance start time represented as <i>mm</i>, where <i>mm</i> is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.</p>"
        },
        "DayOfWeek":{
          "shape":"DayOfWeek",
          "documentation":"<p>An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday and 6 represents Saturday. The day of week is in the time zone of the gateway.</p>"
        },
        "Timezone":{"shape":"GatewayTimezone"}
      },
      "documentation":"<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>DescribeMaintenanceStartTimeOutput$DayOfWeek</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$HourOfDay</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$MinuteOfHour</a> </p> </li> <li> <p> <a>DescribeMaintenanceStartTimeOutput$Timezone</a> </p> </li> </ul>"
    },
    "DescribeNFSFileSharesInput":{
      "type":"structure",
      "required":["FileShareARNList"],
      "members":{
        "FileShareARNList":{
          "shape":"FileShareARNList",
          "documentation":"<p>An array containing the Amazon Resource Name (ARN) of each file share to be described. </p>"
        }
      },
      "documentation":"<p>DescribeNFSFileSharesInput</p>"
    },
    "DescribeNFSFileSharesOutput":{
      "type":"structure",
      "members":{
        "NFSFileShareInfoList":{
          "shape":"NFSFileShareInfoList",
          "documentation":"<p>An array containing a description for each requested file share. </p>"
        }
      },
      "documentation":"<p>DescribeNFSFileSharesOutput</p>"
    },
    "DescribeSMBFileSharesInput":{
      "type":"structure",
      "required":["FileShareARNList"],
      "members":{
        "FileShareARNList":{
          "shape":"FileShareARNList",
          "documentation":"<p>An array containing the Amazon Resource Name (ARN) of each file share to be described. </p>"
        }
      },
      "documentation":"<p>DescribeSMBFileSharesInput</p>"
    },
    "DescribeSMBFileSharesOutput":{
      "type":"structure",
      "members":{
        "SMBFileShareInfoList":{
          "shape":"SMBFileShareInfoList",
          "documentation":"<p>An array containing a description for each requested file share. </p>"
        }
      },
      "documentation":"<p>DescribeSMBFileSharesOutput</p>"
    },
    "DescribeSMBSettingsInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "DescribeSMBSettingsOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain that the gateway is joined to.</p>"
        },
        "SMBGuestPasswordSet":{
          "shape":"Boolean",
          "documentation":"<p>This value is true if a password for the guest user “smbguest” is set, and otherwise false.</p>"
        }
      }
    },
    "DescribeSnapshotScheduleInput":{
      "type":"structure",
      "required":["VolumeARN"],
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the <a>DescribeSnapshotScheduleInput$VolumeARN</a> of the volume.</p>"
    },
    "DescribeSnapshotScheduleOutput":{
      "type":"structure",
      "members":{
        "VolumeARN":{"shape":"VolumeARN"},
        "StartAt":{"shape":"HourOfDay"},
        "RecurrenceInHours":{"shape":"RecurrenceInHours"},
        "Description":{"shape":"Description"},
        "Timezone":{"shape":"GatewayTimezone"}
      }
    },
    "DescribeStorediSCSIVolumesInput":{
      "type":"structure",
      "required":["VolumeARNs"],
      "members":{
        "VolumeARNs":{
          "shape":"VolumeARNs",
          "documentation":"<p>An array of strings where each string represents the Amazon Resource Name (ARN) of a stored volume. All of the specified stored volumes must from the same gateway. Use <a>ListVolumes</a> to get volume ARNs for a gateway.</p>"
        }
      },
      "documentation":"<p>A JSON object containing a list of <a>DescribeStorediSCSIVolumesInput$VolumeARNs</a>.</p>"
    },
    "DescribeStorediSCSIVolumesOutput":{
      "type":"structure",
      "members":{
        "StorediSCSIVolumes":{"shape":"StorediSCSIVolumes"}
      }
    },
    "DescribeTapeArchivesInput":{
      "type":"structure",
      "members":{
        "TapeARNs":{
          "shape":"TapeARNs",
          "documentation":"<p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which to begin describing virtual tapes.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>Specifies that the number of virtual tapes descried be limited to the specified number.</p>"
        }
      },
      "documentation":"<p>DescribeTapeArchivesInput</p>"
    },
    "DescribeTapeArchivesOutput":{
      "type":"structure",
      "members":{
        "TapeArchives":{
          "shape":"TapeArchives",
          "documentation":"<p>An array of virtual tape objects in the virtual tape shelf (VTS). The description includes of the Amazon Resource Name (ARN) of the virtual tapes. The information returned includes the Amazon Resource Names (ARNs) of the tapes, size of the tapes, status of the tapes, progress of the description and tape barcode.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which the virtual tapes that were fetched for description ended. Use this marker in your next request to fetch the next set of virtual tapes in the virtual tape shelf (VTS). If there are no more virtual tapes to describe, this field does not appear in the response.</p>"
        }
      },
      "documentation":"<p>DescribeTapeArchivesOutput</p>"
    },
    "DescribeTapeRecoveryPointsInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which to begin describing the virtual tape recovery points.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>Specifies that the number of virtual tape recovery points that are described be limited to the specified number.</p>"
        }
      },
      "documentation":"<p>DescribeTapeRecoveryPointsInput</p>"
    },
    "DescribeTapeRecoveryPointsOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "TapeRecoveryPointInfos":{
          "shape":"TapeRecoveryPointInfos",
          "documentation":"<p>An array of TapeRecoveryPointInfos that are available for the specified gateway.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which the virtual tape recovery points that were listed for description ended.</p> <p>Use this marker in your next request to list the next set of virtual tape recovery points in the list. If there are no more recovery points to describe, this field does not appear in the response.</p>"
        }
      },
      "documentation":"<p>DescribeTapeRecoveryPointsOutput</p>"
    },
    "DescribeTapesInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "TapeARNs":{
          "shape":"TapeARNs",
          "documentation":"<p>Specifies one or more unique Amazon Resource Names (ARNs) that represent the virtual tapes you want to describe. If this parameter is not specified, Tape gateway returns a description of all virtual tapes associated with the specified gateway.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>A marker value, obtained in a previous call to <code>DescribeTapes</code>. This marker indicates which page of results to retrieve. </p> <p>If not specified, the first page of results is retrieved.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>Specifies that the number of virtual tapes described be limited to the specified number.</p> <note> <p>Amazon Web Services may impose its own limit, if this field is not set.</p> </note>"
        }
      },
      "documentation":"<p>DescribeTapesInput</p>"
    },
    "DescribeTapesOutput":{
      "type":"structure",
      "members":{
        "Tapes":{
          "shape":"Tapes",
          "documentation":"<p>An array of virtual tape descriptions.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string which can be used as part of a subsequent DescribeTapes call to retrieve the next page of results.</p> <p>If a response does not contain a marker, then there are no more results to be retrieved.</p>"
        }
      },
      "documentation":"<p>DescribeTapesOutput</p>"
    },
    "DescribeUploadBufferInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "DescribeUploadBufferOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DiskIds":{"shape":"DiskIds"},
        "UploadBufferUsedInBytes":{"shape":"long"},
        "UploadBufferAllocatedInBytes":{"shape":"long"}
      }
    },
    "DescribeVTLDevicesInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "VTLDeviceARNs":{
          "shape":"VTLDeviceARNs",
          "documentation":"<p>An array of strings, where each string represents the Amazon Resource Name (ARN) of a VTL device.</p> <note> <p>All of the specified VTL devices must be from the same gateway. If no VTL devices are specified, the result will contain all devices on the specified gateway.</p> </note>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which to begin describing the VTL devices.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>Specifies that the number of VTL devices described be limited to the specified number.</p>"
        }
      },
      "documentation":"<p>DescribeVTLDevicesInput</p>"
    },
    "DescribeVTLDevicesOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "VTLDevices":{
          "shape":"VTLDevices",
          "documentation":"<p>An array of VTL device objects composed of the Amazon Resource Name(ARN) of the VTL devices.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which the VTL devices that were fetched for description ended. Use the marker in your next request to fetch the next set of VTL devices in the list. If there are no more VTL devices to describe, this field does not appear in the response.</p>"
        }
      },
      "documentation":"<p>DescribeVTLDevicesOutput</p>"
    },
    "DescribeWorkingStorageInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway.</p>"
    },
    "DescribeWorkingStorageOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "DiskIds":{
          "shape":"DiskIds",
          "documentation":"<p>An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.</p>"
        },
        "WorkingStorageUsedInBytes":{
          "shape":"long",
          "documentation":"<p>The total working storage in bytes in use by the gateway. If no working storage is configured for the gateway, this field returns 0.</p>"
        },
        "WorkingStorageAllocatedInBytes":{
          "shape":"long",
          "documentation":"<p>The total working storage in bytes allocated for the gateway. If no working storage is configured for the gateway, this field returns 0.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "Description":{
      "type":"string",
      "max":255,
      "min":1
    },
    "DeviceType":{
      "type":"string",
      "max":50,
      "min":2
    },
    "DeviceiSCSIAttributes":{
      "type":"structure",
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>Specifies the unique Amazon Resource Name (ARN) that encodes the iSCSI qualified name(iqn) of a tape drive or media changer target.</p>"
        },
        "NetworkInterfaceId":{
          "shape":"NetworkInterfaceId",
          "documentation":"<p>The network interface identifier of the VTL device.</p>"
        },
        "NetworkInterfacePort":{
          "shape":"integer",
          "documentation":"<p>The port used to communicate with iSCSI VTL device targets.</p>"
        },
        "ChapEnabled":{
          "shape":"boolean",
          "documentation":"<p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>"
        }
      },
      "documentation":"<p>Lists iSCSI information about a VTL device.</p>"
    },
    "DisableGatewayInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>DisableGatewayInput</p>"
    },
    "DisableGatewayOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The unique Amazon Resource Name (ARN) of the disabled gateway.</p>"
        }
      },
      "documentation":"<p>DisableGatewayOutput</p>"
    },
    "Disk":{
      "type":"structure",
      "members":{
        "DiskId":{"shape":"DiskId"},
        "DiskPath":{"shape":"string"},
        "DiskNode":{"shape":"string"},
        "DiskStatus":{"shape":"string"},
        "DiskSizeInBytes":{"shape":"long"},
        "DiskAllocationType":{"shape":"DiskAllocationType"},
        "DiskAllocationResource":{"shape":"string"}
      }
    },
    "DiskAllocationType":{
      "type":"string",
      "max":100,
      "min":3
    },
    "DiskId":{
      "type":"string",
      "max":300,
      "min":1
    },
    "DiskIds":{
      "type":"list",
      "member":{"shape":"DiskId"}
    },
    "Disks":{
      "type":"list",
      "member":{"shape":"Disk"}
    },
    "DomainName":{
      "type":"string",
      "pattern":"^([a-z0-9]+(-[a-z0-9]+)*\\.)+[a-z]{2,}$"
    },
    "DomainUserName":{
      "type":"string",
      "pattern":"^\\w[\\w\\.\\- ]*$"
    },
    "DomainUserPassword":{
      "type":"string",
      "pattern":"^[ -~]+$",
      "sensitive":true
    },
    "DoubleObject":{"type":"double"},
    "ErrorCode":{
      "type":"string",
      "enum":[
        "ActivationKeyExpired",
        "ActivationKeyInvalid",
        "ActivationKeyNotFound",
        "GatewayInternalError",
        "GatewayNotConnected",
        "GatewayNotFound",
        "GatewayProxyNetworkConnectionBusy",
        "AuthenticationFailure",
        "BandwidthThrottleScheduleNotFound",
        "Blocked",
        "CannotExportSnapshot",
        "ChapCredentialNotFound",
        "DiskAlreadyAllocated",
        "DiskDoesNotExist",
        "DiskSizeGreaterThanVolumeMaxSize",
        "DiskSizeLessThanVolumeSize",
        "DiskSizeNotGigAligned",
        "DuplicateCertificateInfo",
        "DuplicateSchedule",
        "EndpointNotFound",
        "IAMNotSupported",
        "InitiatorInvalid",
        "InitiatorNotFound",
        "InternalError",
        "InvalidGateway",
        "InvalidEndpoint",
        "InvalidParameters",
        "InvalidSchedule",
        "LocalStorageLimitExceeded",
        "LunAlreadyAllocated ",
        "LunInvalid",
        "MaximumContentLengthExceeded",
        "MaximumTapeCartridgeCountExceeded",
        "MaximumVolumeCountExceeded",
        "NetworkConfigurationChanged",
        "NoDisksAvailable",
        "NotImplemented",
        "NotSupported",
        "OperationAborted",
        "OutdatedGateway",
        "ParametersNotImplemented",
        "RegionInvalid",
        "RequestTimeout",
        "ServiceUnavailable",
        "SnapshotDeleted",
        "SnapshotIdInvalid",
        "SnapshotInProgress",
        "SnapshotNotFound",
        "SnapshotScheduleNotFound",
        "StagingAreaFull",
        "StorageFailure",
        "TapeCartridgeNotFound",
        "TargetAlreadyExists",
        "TargetInvalid",
        "TargetNotFound",
        "UnauthorizedOperation",
        "VolumeAlreadyExists",
        "VolumeIdInvalid",
        "VolumeInUse",
        "VolumeNotFound",
        "VolumeNotReady"
      ]
    },
    "FileShareARN":{
      "type":"string",
      "documentation":"<p>The Amazon Resource Name (ARN) of the file share. </p>",
      "max":500,
      "min":50
    },
    "FileShareARNList":{
      "type":"list",
      "member":{"shape":"FileShareARN"},
      "max":10,
      "min":1
    },
    "FileShareClientList":{
      "type":"list",
      "member":{"shape":"IPV4AddressCIDR"},
      "documentation":"<p>The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks. </p>",
      "max":100,
      "min":1
    },
    "FileShareId":{
      "type":"string",
      "documentation":"<p>The ID of the file share. </p>",
      "max":30,
      "min":12
    },
    "FileShareInfo":{
      "type":"structure",
      "members":{
        "FileShareType":{"shape":"FileShareType"},
        "FileShareARN":{"shape":"FileShareARN"},
        "FileShareId":{"shape":"FileShareId"},
        "FileShareStatus":{"shape":"FileShareStatus"},
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>Describes a file share.</p>"
    },
    "FileShareInfoList":{
      "type":"list",
      "member":{"shape":"FileShareInfo"}
    },
    "FileShareStatus":{
      "type":"string",
      "documentation":"<p>The status of the file share. Possible values are <code>CREATING</code>, <code>UPDATING</code>, <code>AVAILABLE</code> and <code>DELETING</code>. </p>",
      "max":50,
      "min":3
    },
    "FileShareType":{
      "type":"string",
      "documentation":"<p>The type of the file share.</p>",
      "enum":[
        "NFS",
        "SMB"
      ]
    },
    "FileShareUser":{
      "type":"string",
      "max":64,
      "min":1
    },
    "FileShareUserList":{
      "type":"list",
      "member":{"shape":"FileShareUser"},
      "max":100,
      "min":0
    },
    "GatewayARN":{
      "type":"string",
      "documentation":"<p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>",
      "max":500,
      "min":50
    },
    "GatewayId":{
      "type":"string",
      "max":30,
      "min":12
    },
    "GatewayInfo":{
      "type":"structure",
      "members":{
        "GatewayId":{
          "shape":"GatewayId",
          "documentation":"<p>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</p>"
        },
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>"
        },
        "GatewayType":{
          "shape":"GatewayType",
          "documentation":"<p>The type of the gateway.</p>"
        },
        "GatewayOperationalState":{
          "shape":"GatewayOperationalState",
          "documentation":"<p>The state of the gateway.</p> <p>Valid Values: DISABLED or ACTIVE</p>"
        },
        "GatewayName":{
          "shape":"string",
          "documentation":"<p>The name of the gateway.</p>"
        }
      },
      "documentation":"<p>Describes a gateway object.</p>"
    },
    "GatewayName":{
      "type":"string",
      "documentation":"<p>The name you configured for your gateway.</p>",
      "max":255,
      "min":2,
      "pattern":"^[ -\\.0-\\[\\]-~]*[!-\\.0-\\[\\]-~][ -\\.0-\\[\\]-~]*$"
    },
    "GatewayNetworkInterfaces":{
      "type":"list",
      "member":{"shape":"NetworkInterface"}
    },
    "GatewayOperationalState":{
      "type":"string",
      "max":25,
      "min":2
    },
    "GatewayState":{
      "type":"string",
      "max":25,
      "min":2
    },
    "GatewayTimezone":{
      "type":"string",
      "max":10,
      "min":3
    },
    "GatewayType":{
      "type":"string",
      "max":20,
      "min":2
    },
    "Gateways":{
      "type":"list",
      "member":{"shape":"GatewayInfo"}
    },
    "HourOfDay":{
      "type":"integer",
      "max":23,
      "min":0
    },
    "IPV4AddressCIDR":{
      "type":"string",
      "pattern":"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\\/([0-9]|[1-2][0-9]|3[0-2]))?$"
    },
    "Initiator":{
      "type":"string",
      "max":50,
      "min":1
    },
    "Initiators":{
      "type":"list",
      "member":{"shape":"Initiator"}
    },
    "InternalServerError":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"string",
          "documentation":"<p>A human-readable message describing the error that occurred.</p>"
        },
        "error":{
          "shape":"StorageGatewayError",
          "documentation":"<p>A <a>StorageGatewayError</a> that provides more information about the cause of the error.</p>"
        }
      },
      "documentation":"<p>An internal server error has occurred during the request. For more information, see the error and message fields.</p>",
      "exception":true
    },
    "InvalidGatewayRequestException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"string",
          "documentation":"<p>A human-readable message describing the error that occurred.</p>"
        },
        "error":{
          "shape":"StorageGatewayError",
          "documentation":"<p>A <a>StorageGatewayError</a> that provides more detail about the cause of the error.</p>"
        }
      },
      "documentation":"<p>An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.</p>",
      "exception":true
    },
    "IqnName":{
      "type":"string",
      "max":255,
      "min":1,
      "pattern":"[0-9a-z:.-]+"
    },
    "JoinDomainInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "DomainName",
        "UserName",
        "Password"
      ],
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The unique Amazon Resource Name (ARN) of the file gateway you want to add to the Active Directory domain. </p>"
        },
        "DomainName":{
          "shape":"DomainName",
          "documentation":"<p>The name of the domain that you want the gateway to join.</p>"
        },
        "UserName":{
          "shape":"DomainUserName",
          "documentation":"<p>Sets the user name of user who has permission to add the gateway to the Active Directory domain.</p>"
        },
        "Password":{
          "shape":"DomainUserPassword",
          "documentation":"<p>Sets the password of the user who has permission to add the gateway to the Active Directory domain.</p>"
        }
      },
      "documentation":"<p>JoinDomainInput</p>"
    },
    "JoinDomainOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The unique Amazon Resource Name (ARN) of the gateway that joined the domain.</p>"
        }
      },
      "documentation":"<p>JoinDomainOutput</p>"
    },
    "KMSKey":{
      "type":"string",
      "documentation":"<p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>",
      "max":2048,
      "min":20
    },
    "LastSoftwareUpdate":{
      "type":"string",
      "max":25,
      "min":1
    },
    "ListFileSharesInput":{
      "type":"structure",
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon resource Name (ARN) of the gateway whose file shares you want to list. If this field is not present, all file shares under your account are listed.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>The maximum number of file shares to return in the response. The value must be an integer with a value greater than zero. Optional.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>Opaque pagination token returned from a previous ListFileShares operation. If present, <code>Marker</code> specifies where to continue the list from after a previous call to ListFileShares. Optional.</p>"
        }
      },
      "documentation":"<p>ListFileShareInput</p>"
    },
    "ListFileSharesOutput":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>If the request includes <code>Marker</code>, the response returns that value in this field. </p>"
        },
        "NextMarker":{
          "shape":"Marker",
          "documentation":"<p>If a value is present, there are more file shares to return. In a subsequent request, use <code>NextMarker</code> as the value for <code>Marker</code> to retrieve the next set of file shares. </p>"
        },
        "FileShareInfoList":{
          "shape":"FileShareInfoList",
          "documentation":"<p>An array of information about the file gateway's file shares. </p>"
        }
      },
      "documentation":"<p>ListFileShareOutput</p>"
    },
    "ListGatewaysInput":{
      "type":"structure",
      "members":{
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which to begin the returned list of gateways.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>Specifies that the list of gateways returned be limited to the specified number of items.</p>"
        }
      },
      "documentation":"<p>A JSON object containing zero or more of the following fields:</p> <ul> <li> <p> <a>ListGatewaysInput$Limit</a> </p> </li> <li> <p> <a>ListGatewaysInput$Marker</a> </p> </li> </ul>"
    },
    "ListGatewaysOutput":{
      "type":"structure",
      "members":{
        "Gateways":{"shape":"Gateways"},
        "Marker":{"shape":"Marker"}
      }
    },
    "ListLocalDisksInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway.</p>"
    },
    "ListLocalDisksOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "Disks":{"shape":"Disks"}
      }
    },
    "ListTagsForResourceInput":{
      "type":"structure",
      "required":["ResourceARN"],
      "members":{
        "ResourceARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which to begin returning the list of tags.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>Specifies that the list of tags returned be limited to the specified number of items.</p>"
        }
      },
      "documentation":"<p>ListTagsForResourceInput</p>"
    },
    "ListTagsForResourceOutput":{
      "type":"structure",
      "members":{
        "ResourceARN":{
          "shape":"ResourceARN",
          "documentation":"<p>he Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>"
        },
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>An opaque string that indicates the position at which to stop returning the list of tags.</p>"
        },
        "Tags":{
          "shape":"Tags",
          "documentation":"<p>An array that contains the tags for the specified resource.</p>"
        }
      },
      "documentation":"<p>ListTagsForResourceOutput</p>"
    },
    "ListTapesInput":{
      "type":"structure",
      "members":{
        "TapeARNs":{"shape":"TapeARNs"},
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>A string that indicates the position at which to begin the returned list of tapes.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>An optional number limit for the tapes in the list returned by this call.</p>"
        }
      },
      "documentation":"<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListTapesInput$Limit</a> </p> </li> <li> <p> <a>ListTapesInput$Marker</a> </p> </li> <li> <p> <a>ListTapesInput$TapeARNs</a> </p> </li> </ul>"
    },
    "ListTapesOutput":{
      "type":"structure",
      "members":{
        "TapeInfos":{"shape":"TapeInfos"},
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>A string that indicates the position at which to begin returning the next list of tapes. Use the marker in your next request to continue pagination of tapes. If there are no more tapes to list, this element does not appear in the response body.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListTapesOutput$Marker</a> </p> </li> <li> <p> <a>ListTapesOutput$VolumeInfos</a> </p> </li> </ul>"
    },
    "ListVolumeInitiatorsInput":{
      "type":"structure",
      "required":["VolumeARN"],
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes for the gateway.</p>"
        }
      },
      "documentation":"<p>ListVolumeInitiatorsInput</p>"
    },
    "ListVolumeInitiatorsOutput":{
      "type":"structure",
      "members":{
        "Initiators":{
          "shape":"Initiators",
          "documentation":"<p>The host names and port numbers of all iSCSI initiators that are connected to the gateway.</p>"
        }
      },
      "documentation":"<p>ListVolumeInitiatorsOutput</p>"
    },
    "ListVolumeRecoveryPointsInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "ListVolumeRecoveryPointsOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "VolumeRecoveryPointInfos":{"shape":"VolumeRecoveryPointInfos"}
      }
    },
    "ListVolumesInput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "Marker":{
          "shape":"Marker",
          "documentation":"<p>A string that indicates the position at which to begin the returned list of volumes. Obtain the marker from the response of a previous List iSCSI Volumes request.</p>"
        },
        "Limit":{
          "shape":"PositiveIntObject",
          "documentation":"<p>Specifies that the list of volumes returned be limited to the specified number of items.</p>"
        }
      },
      "documentation":"<p>A JSON object that contains one or more of the following fields:</p> <ul> <li> <p> <a>ListVolumesInput$Limit</a> </p> </li> <li> <p> <a>ListVolumesInput$Marker</a> </p> </li> </ul>"
    },
    "ListVolumesOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "Marker":{"shape":"Marker"},
        "VolumeInfos":{"shape":"VolumeInfos"}
      }
    },
    "LocalConsolePassword":{
      "type":"string",
      "max":512,
      "min":6,
      "pattern":"^[ -~]+$",
      "sensitive":true
    },
    "LocationARN":{
      "type":"string",
      "documentation":"<p>The ARN of the backend storage used for storing file data. </p>",
      "max":310,
      "min":16
    },
    "Marker":{
      "type":"string",
      "max":1000,
      "min":1
    },
    "MediumChangerType":{
      "type":"string",
      "max":50,
      "min":2
    },
    "MinuteOfHour":{
      "type":"integer",
      "max":59,
      "min":0
    },
    "NFSFileShareDefaults":{
      "type":"structure",
      "members":{
        "FileMode":{
          "shape":"PermissionMode",
          "documentation":"<p>The Unix file mode in the form \"nnnn\". For example, \"0666\" represents the default file mode inside the file share. The default value is 0666. </p>"
        },
        "DirectoryMode":{
          "shape":"PermissionMode",
          "documentation":"<p>The Unix directory mode in the form \"nnnn\". For example, \"0666\" represents the default access mode for all directories inside the file share. The default value is 0777.</p>"
        },
        "GroupId":{
          "shape":"PermissionId",
          "documentation":"<p>The default group ID for the file share (unless the files have another group ID specified). The default value is nfsnobody. </p>"
        },
        "OwnerId":{
          "shape":"PermissionId",
          "documentation":"<p>The default owner ID for files in the file share (unless the files have another owner ID specified). The default value is nfsnobody. </p>"
        }
      },
      "documentation":"<p>Describes Network File System (NFS) file share default values. Files and folders stored as Amazon S3 objects in S3 buckets don't, by default, have Unix file permissions assigned to them. Upon discovery in an S3 bucket by Storage Gateway, the S3 objects that represent files and folders are assigned these default Unix permissions. This operation is only supported for file gateways.</p>"
    },
    "NFSFileShareInfo":{
      "type":"structure",
      "members":{
        "NFSFileShareDefaults":{"shape":"NFSFileShareDefaults"},
        "FileShareARN":{"shape":"FileShareARN"},
        "FileShareId":{"shape":"FileShareId"},
        "FileShareStatus":{"shape":"FileShareStatus"},
        "GatewayARN":{"shape":"GatewayARN"},
        "KMSEncrypted":{
          "shape":"boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. </p>"
        },
        "KMSKey":{"shape":"KMSKey"},
        "Path":{"shape":"Path"},
        "Role":{"shape":"Role"},
        "LocationARN":{"shape":"LocationARN"},
        "DefaultStorageClass":{
          "shape":"StorageClass",
          "documentation":"<p>The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value <code>S3_STANDARD</code> is used. Optional.</p>"
        },
        "ObjectACL":{"shape":"ObjectACL"},
        "ClientList":{"shape":"FileShareClientList"},
        "Squash":{"shape":"Squash"},
        "ReadOnly":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.</p>"
        },
        "GuessMIMETypeEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.</p>"
        },
        "RequesterPays":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the access control list permission for objects in the Amazon S3 bucket that a file gateway puts objects into. The default value is <code>private</code>.</p>"
        }
      },
      "documentation":"<p>The Unix file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported in file gateways.</p>"
    },
    "NFSFileShareInfoList":{
      "type":"list",
      "member":{"shape":"NFSFileShareInfo"}
    },
    "NetworkInterface":{
      "type":"structure",
      "members":{
        "Ipv4Address":{
          "shape":"string",
          "documentation":"<p>The Internet Protocol version 4 (IPv4) address of the interface.</p>"
        },
        "MacAddress":{
          "shape":"string",
          "documentation":"<p>The Media Access Control (MAC) address of the interface.</p> <note> <p>This is currently unsupported and will not be returned in output.</p> </note>"
        },
        "Ipv6Address":{
          "shape":"string",
          "documentation":"<p>The Internet Protocol version 6 (IPv6) address of the interface. <i>Currently not supported</i>.</p>"
        }
      },
      "documentation":"<p>Describes a gateway's network interface.</p>"
    },
    "NetworkInterfaceId":{
      "type":"string",
      "pattern":"\\A(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\z"
    },
    "NextUpdateAvailabilityDate":{
      "type":"string",
      "max":25,
      "min":1
    },
    "NotificationId":{
      "type":"string",
      "documentation":"<p>The randomly generated ID of the notification that was sent. This ID is in UUID format.</p>",
      "max":2048,
      "min":1
    },
    "NotifyWhenUploadedInput":{
      "type":"structure",
      "required":["FileShareARN"],
      "members":{
        "FileShareARN":{"shape":"FileShareARN"}
      }
    },
    "NotifyWhenUploadedOutput":{
      "type":"structure",
      "members":{
        "FileShareARN":{"shape":"FileShareARN"},
        "NotificationId":{"shape":"NotificationId"}
      }
    },
    "NumTapesToCreate":{
      "type":"integer",
      "max":10,
      "min":1
    },
    "ObjectACL":{
      "type":"string",
      "documentation":"<p>A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is \"private\".</p>",
      "enum":[
        "private",
        "public-read",
        "public-read-write",
        "authenticated-read",
        "bucket-owner-read",
        "bucket-owner-full-control",
        "aws-exec-read"
      ]
    },
    "Path":{
      "type":"string",
      "documentation":"<p>The file share path used by the NFS client to identify the mount point. </p>"
    },
    "PermissionId":{
      "type":"long",
      "max":4294967294,
      "min":0
    },
    "PermissionMode":{
      "type":"string",
      "max":4,
      "min":1,
      "pattern":"^[0-7]{4}$"
    },
    "PositiveIntObject":{
      "type":"integer",
      "min":1
    },
    "RecurrenceInHours":{
      "type":"integer",
      "max":24,
      "min":1
    },
    "RefreshCacheInput":{
      "type":"structure",
      "required":["FileShareARN"],
      "members":{
        "FileShareARN":{"shape":"FileShareARN"}
      }
    },
    "RefreshCacheOutput":{
      "type":"structure",
      "members":{
        "FileShareARN":{"shape":"FileShareARN"}
      }
    },
    "RegionId":{
      "type":"string",
      "max":25,
      "min":1
    },
    "RemoveTagsFromResourceInput":{
      "type":"structure",
      "required":[
        "ResourceARN",
        "TagKeys"
      ],
      "members":{
        "ResourceARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource you want to remove the tags from.</p>"
        },
        "TagKeys":{
          "shape":"TagKeys",
          "documentation":"<p>The keys of the tags you want to remove from the specified resource. A tag is composed of a key/value pair.</p>"
        }
      },
      "documentation":"<p>RemoveTagsFromResourceInput</p>"
    },
    "RemoveTagsFromResourceOutput":{
      "type":"structure",
      "members":{
        "ResourceARN":{
          "shape":"ResourceARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the resource that the tags were removed from.</p>"
        }
      },
      "documentation":"<p>RemoveTagsFromResourceOutput</p>"
    },
    "ResetCacheInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "ResetCacheOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "ResourceARN":{
      "type":"string",
      "max":500,
      "min":50
    },
    "RetrieveTapeArchiveInput":{
      "type":"structure",
      "required":[
        "TapeARN",
        "GatewayARN"
      ],
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape you want to retrieve from the virtual tape shelf (VTS).</p>"
        },
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the gateway you want to retrieve the virtual tape to. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p> <p>You retrieve archived virtual tapes to only one gateway and the gateway must be a tape gateway.</p>"
        }
      },
      "documentation":"<p>RetrieveTapeArchiveInput</p>"
    },
    "RetrieveTapeArchiveOutput":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the retrieved virtual tape.</p>"
        }
      },
      "documentation":"<p>RetrieveTapeArchiveOutput</p>"
    },
    "RetrieveTapeRecoveryPointInput":{
      "type":"structure",
      "required":[
        "TapeARN",
        "GatewayARN"
      ],
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape for which you want to retrieve the recovery point.</p>"
        },
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>RetrieveTapeRecoveryPointInput</p>"
    },
    "RetrieveTapeRecoveryPointOutput":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape for which the recovery point was retrieved.</p>"
        }
      },
      "documentation":"<p>RetrieveTapeRecoveryPointOutput</p>"
    },
    "Role":{
      "type":"string",
      "documentation":"<p>The ARN of the IAM role that file gateway assumes when it accesses the underlying storage. </p>",
      "max":2048,
      "min":20
    },
    "SMBFileShareInfo":{
      "type":"structure",
      "members":{
        "FileShareARN":{"shape":"FileShareARN"},
        "FileShareId":{"shape":"FileShareId"},
        "FileShareStatus":{"shape":"FileShareStatus"},
        "GatewayARN":{"shape":"GatewayARN"},
        "KMSEncrypted":{
          "shape":"boolean",
          "documentation":"<p>True to use Amazon S3 server-side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. </p>"
        },
        "KMSKey":{"shape":"KMSKey"},
        "Path":{
          "shape":"Path",
          "documentation":"<p>The file share path used by the SMB client to identify the mount point.</p>"
        },
        "Role":{"shape":"Role"},
        "LocationARN":{"shape":"LocationARN"},
        "DefaultStorageClass":{
          "shape":"StorageClass",
          "documentation":"<p>The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value <code>S3_STANDARD</code> is used. Optional.</p>"
        },
        "ObjectACL":{"shape":"ObjectACL"},
        "ReadOnly":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.</p>"
        },
        "GuessMIMETypeEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.</p>"
        },
        "RequesterPays":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the access control list permission for objects in the Amazon S3 bucket that a file gateway puts objects into. The default value is <code>private</code>.</p>"
        },
        "ValidUserList":{
          "shape":"FileShareUserList",
          "documentation":"<p>A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>"
        },
        "InvalidUserList":{
          "shape":"FileShareUserList",
          "documentation":"<p>A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>"
        },
        "Authentication":{"shape":"Authentication"}
      },
      "documentation":"<p>The Windows file permissions and ownership information assigned, by default, to native S3 objects when file gateway discovers them in S3 buckets. This operation is only supported for file gateways.</p>"
    },
    "SMBFileShareInfoList":{
      "type":"list",
      "member":{"shape":"SMBFileShareInfo"}
    },
    "SMBGuestPassword":{
      "type":"string",
      "max":512,
      "min":6,
      "pattern":"^[ -~]+$",
      "sensitive":true
    },
    "ServiceUnavailableError":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"string",
          "documentation":"<p>A human-readable message describing the error that occurred.</p>"
        },
        "error":{
          "shape":"StorageGatewayError",
          "documentation":"<p>A <a>StorageGatewayError</a> that provides more information about the cause of the error.</p>"
        }
      },
      "documentation":"<p>An internal server error has occurred because the service is unavailable. For more information, see the error and message fields.</p>",
      "exception":true
    },
    "SetLocalConsolePasswordInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "LocalConsolePassword"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "LocalConsolePassword":{
          "shape":"LocalConsolePassword",
          "documentation":"<p>The password you want to set for your VM local console.</p>"
        }
      },
      "documentation":"<p>SetLocalConsolePasswordInput</p>"
    },
    "SetLocalConsolePasswordOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "SetSMBGuestPasswordInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "Password"
      ],
      "members":{
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the file gateway the SMB file share is associated with.</p>"
        },
        "Password":{
          "shape":"SMBGuestPassword",
          "documentation":"<p>The password that you want to set for your SMB Server.</p>"
        }
      },
      "documentation":"<p>SetSMBGuestPasswordInput</p>"
    },
    "SetSMBGuestPasswordOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      }
    },
    "ShutdownGatewayInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway to shut down.</p>"
    },
    "ShutdownGatewayOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway that was shut down.</p>"
    },
    "SnapshotDescription":{
      "type":"string",
      "max":255,
      "min":1
    },
    "SnapshotId":{
      "type":"string",
      "pattern":"\\Asnap-([0-9A-Fa-f]{8}|[0-9A-Fa-f]{17})\\z"
    },
    "Squash":{
      "type":"string",
      "documentation":"<p>The user mapped to anonymous user. Valid options are the following: </p> <ul> <li> <p> <code>RootSquash</code> - Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code> - No one is mapped to anonymous user</p> </li> <li> <p> <code>AllSquash</code> - Everyone is mapped to anonymous user.</p> </li> </ul>",
      "max":15,
      "min":5
    },
    "StartGatewayInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway to start.</p>"
    },
    "StartGatewayOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway that was restarted.</p>"
    },
    "StorageClass":{
      "type":"string",
      "documentation":"<p/>",
      "max":20,
      "min":5
    },
    "StorageGatewayError":{
      "type":"structure",
      "members":{
        "errorCode":{
          "shape":"ErrorCode",
          "documentation":"<p>Additional information about the error.</p>"
        },
        "errorDetails":{
          "shape":"errorDetails",
          "documentation":"<p>Human-readable text that provides detail about the error that occurred.</p>"
        }
      },
      "documentation":"<p>Provides additional information about an error that was returned by the service as an or. See the <code>errorCode</code> and <code>errorDetails</code> members for more information about the error.</p>"
    },
    "StorediSCSIVolume":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the storage volume.</p>"
        },
        "VolumeId":{
          "shape":"VolumeId",
          "documentation":"<p>The unique identifier of the volume, e.g. vol-AE4B946D.</p>"
        },
        "VolumeType":{
          "shape":"VolumeType",
          "documentation":"<p>One of the VolumeType enumeration values describing the type of the volume.</p>"
        },
        "VolumeStatus":{
          "shape":"VolumeStatus",
          "documentation":"<p>One of the VolumeStatus values that indicates the state of the storage volume.</p>"
        },
        "VolumeSizeInBytes":{
          "shape":"long",
          "documentation":"<p>The size of the volume in bytes.</p>"
        },
        "VolumeProgress":{
          "shape":"DoubleObject",
          "documentation":"<p>Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.</p>"
        },
        "VolumeDiskId":{
          "shape":"DiskId",
          "documentation":"<p>The ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.</p>"
        },
        "SourceSnapshotId":{
          "shape":"SnapshotId",
          "documentation":"<p>If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.</p>"
        },
        "PreservedExistingData":{
          "shape":"boolean",
          "documentation":"<p>Indicates if when the stored volume was created, existing data on the underlying local disk was preserved.</p> <p> Valid Values: true, false</p>"
        },
        "VolumeiSCSIAttributes":{
          "shape":"VolumeiSCSIAttributes",
          "documentation":"<p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.</p>"
        },
        "CreatedDate":{
          "shape":"CreatedDate",
          "documentation":"<p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this time stamp.</p>"
        },
        "VolumeUsedInBytes":{
          "shape":"VolumeUsedInBytes",
          "documentation":"<p>The size of the data stored on the volume in bytes. </p> <note> <p>This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.</p> </note>"
        },
        "KMSKey":{"shape":"KMSKey"}
      },
      "documentation":"<p>Describes an iSCSI stored volume.</p>"
    },
    "StorediSCSIVolumes":{
      "type":"list",
      "member":{"shape":"StorediSCSIVolume"}
    },
    "Tag":{
      "type":"structure",
      "required":[
        "Key",
        "Value"
      ],
      "members":{
        "Key":{"shape":"TagKey"},
        "Value":{"shape":"TagValue"}
      }
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagKeys":{
      "type":"list",
      "member":{"shape":"TagKey"}
    },
    "TagValue":{
      "type":"string",
      "max":256
    },
    "Tags":{
      "type":"list",
      "member":{"shape":"Tag"}
    },
    "Tape":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape.</p>"
        },
        "TapeBarcode":{
          "shape":"TapeBarcode",
          "documentation":"<p>The barcode that identifies a specific virtual tape.</p>"
        },
        "TapeCreatedDate":{
          "shape":"Time",
          "documentation":"<p>The date the virtual tape was created.</p>"
        },
        "TapeSizeInBytes":{
          "shape":"TapeSize",
          "documentation":"<p>The size, in bytes, of the virtual tape capacity.</p>"
        },
        "TapeStatus":{
          "shape":"TapeStatus",
          "documentation":"<p>The current state of the virtual tape.</p>"
        },
        "VTLDevice":{
          "shape":"VTLDeviceARN",
          "documentation":"<p>The virtual tape library (VTL) device that the virtual tape is associated with.</p>"
        },
        "Progress":{
          "shape":"DoubleObject",
          "documentation":"<p>For archiving virtual tapes, indicates how much data remains to be uploaded before archiving is complete.</p> <p>Range: 0 (not started) to 100 (complete).</p>"
        },
        "TapeUsedInBytes":{
          "shape":"TapeUsage",
          "documentation":"<p>The size, in bytes, of data stored on the virtual tape.</p> <note> <p>This value is not available for tapes created prior to May 13, 2015.</p> </note>"
        },
        "KMSKey":{"shape":"KMSKey"}
      },
      "documentation":"<p>Describes a virtual tape object.</p>"
    },
    "TapeARN":{
      "type":"string",
      "max":500,
      "min":50,
      "pattern":"^arn:(aws|aws-cn|aws-us-gov):storagegateway:[a-z\\-0-9]+:[0-9]+:tape\\/[0-9A-Z]{7,16}$"
    },
    "TapeARNs":{
      "type":"list",
      "member":{"shape":"TapeARN"},
      "documentation":"<p>The Amazon Resource Name (ARN) of each of the tapes you want to list. If you don't specify a tape ARN, the response lists all tapes in both your VTL and VTS.</p>"
    },
    "TapeArchive":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of an archived virtual tape.</p>"
        },
        "TapeBarcode":{
          "shape":"TapeBarcode",
          "documentation":"<p>The barcode that identifies the archived virtual tape.</p>"
        },
        "TapeCreatedDate":{
          "shape":"Time",
          "documentation":"<p>The date the virtual tape was created.</p>"
        },
        "TapeSizeInBytes":{
          "shape":"TapeSize",
          "documentation":"<p>The size, in bytes, of the archived virtual tape.</p>"
        },
        "CompletionTime":{
          "shape":"Time",
          "documentation":"<p>The time that the archiving of the virtual tape was completed.</p> <p>The default time stamp format is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>"
        },
        "RetrievedTo":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the tape gateway that the virtual tape is being retrieved to.</p> <p>The virtual tape is retrieved from the virtual tape shelf (VTS).</p>"
        },
        "TapeStatus":{
          "shape":"TapeArchiveStatus",
          "documentation":"<p>The current state of the archived virtual tape.</p>"
        },
        "TapeUsedInBytes":{
          "shape":"TapeUsage",
          "documentation":"<p>The size, in bytes, of data stored on the virtual tape.</p> <note> <p>This value is not available for tapes created prior to May 13, 2015.</p> </note>"
        },
        "KMSKey":{"shape":"KMSKey"}
      },
      "documentation":"<p>Represents a virtual tape that is archived in the virtual tape shelf (VTS).</p>"
    },
    "TapeArchiveStatus":{"type":"string"},
    "TapeArchives":{
      "type":"list",
      "member":{"shape":"TapeArchive"}
    },
    "TapeBarcode":{
      "type":"string",
      "max":16,
      "min":7,
      "pattern":"^[A-Z0-9]*$"
    },
    "TapeBarcodePrefix":{
      "type":"string",
      "max":4,
      "min":1,
      "pattern":"^[A-Z]*$"
    },
    "TapeDriveType":{
      "type":"string",
      "max":50,
      "min":2
    },
    "TapeInfo":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of a virtual tape.</p>"
        },
        "TapeBarcode":{
          "shape":"TapeBarcode",
          "documentation":"<p>The barcode that identifies a specific virtual tape.</p>"
        },
        "TapeSizeInBytes":{
          "shape":"TapeSize",
          "documentation":"<p>The size, in bytes, of a virtual tape.</p>"
        },
        "TapeStatus":{
          "shape":"TapeStatus",
          "documentation":"<p>The status of the tape.</p>"
        },
        "GatewayARN":{
          "shape":"GatewayARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>"
        }
      },
      "documentation":"<p>Describes a virtual tape.</p>"
    },
    "TapeInfos":{
      "type":"list",
      "member":{"shape":"TapeInfo"},
      "documentation":"<p>An array of <a>TapeInfo</a> objects, where each object describes an a single tape. If there not tapes in the tape library or VTS, then the <code>TapeInfos</code> is an empty array.</p>"
    },
    "TapeRecoveryPointInfo":{
      "type":"structure",
      "members":{
        "TapeARN":{
          "shape":"TapeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the virtual tape.</p>"
        },
        "TapeRecoveryPointTime":{
          "shape":"Time",
          "documentation":"<p>The time when the point-in-time view of the virtual tape was replicated for later recovery.</p> <p>The default time stamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</p>"
        },
        "TapeSizeInBytes":{
          "shape":"TapeSize",
          "documentation":"<p>The size, in bytes, of the virtual tapes to recover.</p>"
        },
        "TapeStatus":{"shape":"TapeRecoveryPointStatus"}
      },
      "documentation":"<p>Describes a recovery point.</p>"
    },
    "TapeRecoveryPointInfos":{
      "type":"list",
      "member":{"shape":"TapeRecoveryPointInfo"}
    },
    "TapeRecoveryPointStatus":{"type":"string"},
    "TapeSize":{"type":"long"},
    "TapeStatus":{"type":"string"},
    "TapeUsage":{"type":"long"},
    "Tapes":{
      "type":"list",
      "member":{"shape":"Tape"}
    },
    "TargetARN":{
      "type":"string",
      "max":800,
      "min":50
    },
    "TargetName":{
      "type":"string",
      "max":200,
      "min":1,
      "pattern":"^[-\\.;a-z0-9]+$"
    },
    "Time":{"type":"timestamp"},
    "UpdateBandwidthRateLimitInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "AverageUploadRateLimitInBitsPerSec":{
          "shape":"BandwidthUploadRateLimit",
          "documentation":"<p>The average upload bandwidth rate limit in bits per second.</p>"
        },
        "AverageDownloadRateLimitInBitsPerSec":{
          "shape":"BandwidthDownloadRateLimit",
          "documentation":"<p>The average download bandwidth rate limit in bits per second.</p>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageDownloadRateLimitInBitsPerSec</a> </p> </li> <li> <p> <a>UpdateBandwidthRateLimitInput$AverageUploadRateLimitInBitsPerSec</a> </p> </li> </ul>"
    },
    "UpdateBandwidthRateLimitOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway whose throttle information was updated.</p>"
    },
    "UpdateChapCredentialsInput":{
      "type":"structure",
      "required":[
        "TargetARN",
        "SecretToAuthenticateInitiator",
        "InitiatorName"
      ],
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return the TargetARN for specified VolumeARN.</p>"
        },
        "SecretToAuthenticateInitiator":{
          "shape":"ChapSecret",
          "documentation":"<p>The secret key that the initiator (for example, the Windows client) must provide to participate in mutual CHAP with the target.</p> <note> <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p> </note>"
        },
        "InitiatorName":{
          "shape":"IqnName",
          "documentation":"<p>The iSCSI initiator that connects to the target.</p>"
        },
        "SecretToAuthenticateTarget":{
          "shape":"ChapSecret",
          "documentation":"<p>The secret key that the target must provide to participate in mutual CHAP with the initiator (e.g. Windows client).</p> <p>Byte constraints: Minimum bytes of 12. Maximum bytes of 16.</p> <note> <p>The secret key must be between 12 and 16 bytes when encoded in UTF-8.</p> </note>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateChapCredentialsInput$InitiatorName</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateInitiator</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$SecretToAuthenticateTarget</a> </p> </li> <li> <p> <a>UpdateChapCredentialsInput$TargetARN</a> </p> </li> </ul>"
    },
    "UpdateChapCredentialsOutput":{
      "type":"structure",
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the target. This is the same target specified in the request.</p>"
        },
        "InitiatorName":{
          "shape":"IqnName",
          "documentation":"<p>The iSCSI initiator that connects to the target. This is the same initiator name specified in the request.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p>"
    },
    "UpdateGatewayInformationInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "GatewayName":{"shape":"GatewayName"},
        "GatewayTimezone":{"shape":"GatewayTimezone"}
      }
    },
    "UpdateGatewayInformationOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "GatewayName":{"shape":"string"}
      },
      "documentation":"<p>A JSON object containing the ARN of the gateway that was updated.</p>"
    },
    "UpdateGatewaySoftwareNowInput":{
      "type":"structure",
      "required":["GatewayARN"],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway to update.</p>"
    },
    "UpdateGatewaySoftwareNowOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway that was updated.</p>"
    },
    "UpdateMaintenanceStartTimeInput":{
      "type":"structure",
      "required":[
        "GatewayARN",
        "HourOfDay",
        "MinuteOfHour",
        "DayOfWeek"
      ],
      "members":{
        "GatewayARN":{"shape":"GatewayARN"},
        "HourOfDay":{
          "shape":"HourOfDay",
          "documentation":"<p>The hour component of the maintenance start time represented as <i>hh</i>, where <i>hh</i> is the hour (00 to 23). The hour of the day is in the time zone of the gateway.</p>"
        },
        "MinuteOfHour":{
          "shape":"MinuteOfHour",
          "documentation":"<p>The minute component of the maintenance start time represented as <i>mm</i>, where <i>mm</i> is the minute (00 to 59). The minute of the hour is in the time zone of the gateway.</p>"
        },
        "DayOfWeek":{
          "shape":"DayOfWeek",
          "documentation":"<p>The maintenance start time day of the week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 Saturday.</p>"
        }
      },
      "documentation":"<p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>UpdateMaintenanceStartTimeInput$DayOfWeek</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$HourOfDay</a> </p> </li> <li> <p> <a>UpdateMaintenanceStartTimeInput$MinuteOfHour</a> </p> </li> </ul>"
    },
    "UpdateMaintenanceStartTimeOutput":{
      "type":"structure",
      "members":{
        "GatewayARN":{"shape":"GatewayARN"}
      },
      "documentation":"<p>A JSON object containing the of the gateway whose maintenance start time is updated.</p>"
    },
    "UpdateNFSFileShareInput":{
      "type":"structure",
      "required":["FileShareARN"],
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the file share to be updated. </p>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional. </p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional. </p>"
        },
        "NFSFileShareDefaults":{
          "shape":"NFSFileShareDefaults",
          "documentation":"<p>The default values for the file share. Optional.</p>"
        },
        "DefaultStorageClass":{
          "shape":"StorageClass",
          "documentation":"<p>The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value <code>S3_STANDARD</code> is used. Optional.</p>"
        },
        "ObjectACL":{
          "shape":"ObjectACL",
          "documentation":"<p>A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is \"private\".</p>"
        },
        "ClientList":{
          "shape":"FileShareClientList",
          "documentation":"<p>The list of clients that are allowed to access the file gateway. The list must contain either valid IP addresses or valid CIDR blocks.</p>"
        },
        "Squash":{
          "shape":"Squash",
          "documentation":"<p>The user mapped to anonymous user. Valid options are the following:</p> <ul> <li> <p> <code>RootSquash</code> - Only root is mapped to anonymous user.</p> </li> <li> <p> <code>NoSquash</code> - No one is mapped to anonymous user</p> </li> <li> <p> <code>AllSquash</code> - Everyone is mapped to anonymous user.</p> </li> </ul>"
        },
        "ReadOnly":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.</p>"
        },
        "GuessMIMETypeEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.</p>"
        },
        "RequesterPays":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the access control list permission for objects in the Amazon S3 bucket that a file gateway puts objects into. The default value is <code>private</code>.</p>"
        }
      },
      "documentation":"<p>UpdateNFSFileShareInput</p>"
    },
    "UpdateNFSFileShareOutput":{
      "type":"structure",
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the updated file share. </p>"
        }
      },
      "documentation":"<p>UpdateNFSFileShareOutput</p>"
    },
    "UpdateSMBFileShareInput":{
      "type":"structure",
      "required":["FileShareARN"],
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the SMB file share that you want to update.</p>"
        },
        "KMSEncrypted":{
          "shape":"Boolean",
          "documentation":"<p>True to use Amazon S3 server side encryption with your own AWS KMS key, or false to use a key managed by Amazon S3. Optional.</p>"
        },
        "KMSKey":{
          "shape":"KMSKey",
          "documentation":"<p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>"
        },
        "DefaultStorageClass":{
          "shape":"StorageClass",
          "documentation":"<p>The default storage class for objects put into an Amazon S3 bucket by the file gateway. Possible values are <code>S3_STANDARD</code>, <code>S3_STANDARD_IA</code>, or <code>S3_ONEZONE_IA</code>. If this field is not populated, the default value <code>S3_STANDARD</code> is used. Optional.</p>"
        },
        "ObjectACL":{
          "shape":"ObjectACL",
          "documentation":"<p>A value that sets the access control list permission for objects in the S3 bucket that a file gateway puts objects into. The default value is \"private\".</p>"
        },
        "ReadOnly":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the write status of a file share. This value is true if the write status is read-only, and otherwise false.</p>"
        },
        "GuessMIMETypeEnabled":{
          "shape":"Boolean",
          "documentation":"<p>A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to true to enable MIME type guessing, and otherwise to false. The default value is true.</p>"
        },
        "RequesterPays":{
          "shape":"Boolean",
          "documentation":"<p>A value that sets the access control list permission for objects in the Amazon S3 bucket that a file gateway puts objects into. The default value is <code>private</code>.</p>"
        },
        "ValidUserList":{
          "shape":"FileShareUserList",
          "documentation":"<p>A list of users or groups in the Active Directory that are allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>"
        },
        "InvalidUserList":{
          "shape":"FileShareUserList",
          "documentation":"<p>A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be prefixed with the @ character. For example <code>@group1</code>. Can only be set if Authentication is set to <code>ActiveDirectory</code>.</p>"
        }
      },
      "documentation":"<p>UpdateSMBFileShareInput</p>"
    },
    "UpdateSMBFileShareOutput":{
      "type":"structure",
      "members":{
        "FileShareARN":{
          "shape":"FileShareARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the updated SMB file share. </p>"
        }
      },
      "documentation":"<p>UpdateSMBFileShareOutput</p>"
    },
    "UpdateSnapshotScheduleInput":{
      "type":"structure",
      "required":[
        "VolumeARN",
        "StartAt",
        "RecurrenceInHours"
      ],
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.</p>"
        },
        "StartAt":{
          "shape":"HourOfDay",
          "documentation":"<p>The hour of the day at which the snapshot schedule begins represented as <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.</p>"
        },
        "RecurrenceInHours":{
          "shape":"RecurrenceInHours",
          "documentation":"<p>Frequency of snapshots. Specify the number of hours between snapshots.</p>"
        },
        "Description":{
          "shape":"Description",
          "documentation":"<p>Optional description of the snapshot that overwrites the existing description.</p>"
        }
      },
      "documentation":"<p>A JSON object containing one or more of the following fields:</p> <ul> <li> <p> <a>UpdateSnapshotScheduleInput$Description</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$RecurrenceInHours</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$StartAt</a> </p> </li> <li> <p> <a>UpdateSnapshotScheduleInput$VolumeARN</a> </p> </li> </ul>"
    },
    "UpdateSnapshotScheduleOutput":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p/>"
        }
      },
      "documentation":"<p>A JSON object containing the of the updated storage volume.</p>"
    },
    "UpdateVTLDeviceTypeInput":{
      "type":"structure",
      "required":[
        "VTLDeviceARN",
        "DeviceType"
      ],
      "members":{
        "VTLDeviceARN":{
          "shape":"VTLDeviceARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the medium changer you want to select.</p>"
        },
        "DeviceType":{
          "shape":"DeviceType",
          "documentation":"<p>The type of medium changer you want to select.</p> <p> Valid Values: \"STK-L700\", \"AWS-Gateway-VTL\"</p>"
        }
      }
    },
    "UpdateVTLDeviceTypeOutput":{
      "type":"structure",
      "members":{
        "VTLDeviceARN":{
          "shape":"VTLDeviceARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the medium changer you have selected.</p>"
        }
      },
      "documentation":"<p>UpdateVTLDeviceTypeOutput</p>"
    },
    "VTLDevice":{
      "type":"structure",
      "members":{
        "VTLDeviceARN":{
          "shape":"VTLDeviceARN",
          "documentation":"<p>Specifies the unique Amazon Resource Name (ARN) of the device (tape drive or media changer).</p>"
        },
        "VTLDeviceType":{"shape":"VTLDeviceType"},
        "VTLDeviceVendor":{"shape":"VTLDeviceVendor"},
        "VTLDeviceProductIdentifier":{"shape":"VTLDeviceProductIdentifier"},
        "DeviceiSCSIAttributes":{
          "shape":"DeviceiSCSIAttributes",
          "documentation":"<p>A list of iSCSI information about a VTL device.</p>"
        }
      },
      "documentation":"<p>Represents a device object associated with a tape gateway.</p>"
    },
    "VTLDeviceARN":{
      "type":"string",
      "max":500,
      "min":50
    },
    "VTLDeviceARNs":{
      "type":"list",
      "member":{"shape":"VTLDeviceARN"}
    },
    "VTLDeviceProductIdentifier":{"type":"string"},
    "VTLDeviceType":{"type":"string"},
    "VTLDeviceVendor":{"type":"string"},
    "VTLDevices":{
      "type":"list",
      "member":{"shape":"VTLDevice"}
    },
    "VolumeARN":{
      "type":"string",
      "max":500,
      "min":50
    },
    "VolumeARNs":{
      "type":"list",
      "member":{"shape":"VolumeARN"}
    },
    "VolumeId":{
      "type":"string",
      "max":30,
      "min":12
    },
    "VolumeInfo":{
      "type":"structure",
      "members":{
        "VolumeARN":{
          "shape":"VolumeARN",
          "documentation":"<p>The Amazon Resource Name (ARN) for the storage volume. For example, the following is a valid ARN:</p> <p> <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB</code> </p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>"
        },
        "VolumeId":{
          "shape":"VolumeId",
          "documentation":"<p>The unique identifier assigned to the volume. This ID becomes part of the volume Amazon Resource Name (ARN), which you use as input for other operations.</p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>"
        },
        "GatewayARN":{"shape":"GatewayARN"},
        "GatewayId":{
          "shape":"GatewayId",
          "documentation":"<p>The unique identifier assigned to your gateway during activation. This ID becomes part of the gateway Amazon Resource Name (ARN), which you use as input for other operations.</p> <p> Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>"
        },
        "VolumeType":{"shape":"VolumeType"},
        "VolumeSizeInBytes":{
          "shape":"long",
          "documentation":"<p>The size of the volume in bytes.</p> <p>Valid Values: 50 to 500 lowercase letters, numbers, periods (.), and hyphens (-).</p>"
        }
      },
      "documentation":"<p>Describes a storage volume object.</p>"
    },
    "VolumeInfos":{
      "type":"list",
      "member":{"shape":"VolumeInfo"}
    },
    "VolumeRecoveryPointInfo":{
      "type":"structure",
      "members":{
        "VolumeARN":{"shape":"VolumeARN"},
        "VolumeSizeInBytes":{"shape":"long"},
        "VolumeUsageInBytes":{"shape":"long"},
        "VolumeRecoveryPointTime":{"shape":"string"}
      }
    },
    "VolumeRecoveryPointInfos":{
      "type":"list",
      "member":{"shape":"VolumeRecoveryPointInfo"}
    },
    "VolumeStatus":{
      "type":"string",
      "max":50,
      "min":3
    },
    "VolumeType":{
      "type":"string",
      "max":100,
      "min":3
    },
    "VolumeUsedInBytes":{"type":"long"},
    "VolumeiSCSIAttributes":{
      "type":"structure",
      "members":{
        "TargetARN":{
          "shape":"TargetARN",
          "documentation":"<p>The Amazon Resource Name (ARN) of the volume target.</p>"
        },
        "NetworkInterfaceId":{
          "shape":"NetworkInterfaceId",
          "documentation":"<p>The network interface identifier.</p>"
        },
        "NetworkInterfacePort":{
          "shape":"integer",
          "documentation":"<p>The port used to communicate with iSCSI targets.</p>"
        },
        "LunNumber":{
          "shape":"PositiveIntObject",
          "documentation":"<p>The logical disk number.</p>"
        },
        "ChapEnabled":{
          "shape":"boolean",
          "documentation":"<p>Indicates whether mutual CHAP is enabled for the iSCSI target.</p>"
        }
      },
      "documentation":"<p>Lists iSCSI information about a volume.</p>"
    },
    "boolean":{"type":"boolean"},
    "double":{"type":"double"},
    "errorDetails":{
      "type":"map",
      "key":{"shape":"string"},
      "value":{"shape":"string"}
    },
    "integer":{"type":"integer"},
    "long":{"type":"long"},
    "string":{"type":"string"}
  },
  "documentation":"<fullname>AWS Storage Gateway Service</fullname> <p>AWS Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and AWS's storage infrastructure. The service enables you to securely upload data to the AWS cloud for cost effective backup and rapid disaster recovery.</p> <p>Use the following links to get started using the <i>AWS Storage Gateway Service API Reference</i>:</p> <ul> <li> <p> <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders\">AWS Storage Gateway Required Request Headers</a>: Describes the required headers that you must send with every POST request to AWS Storage Gateway.</p> </li> <li> <p> <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests\">Signing Requests</a>: AWS Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.</p> </li> <li> <p> <a href=\"http://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses\">Error Responses</a>: Provides reference information about AWS Storage Gateway errors.</p> </li> <li> <p> <a href=\"http://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html\">Operations in AWS Storage Gateway</a>: Contains detailed descriptions of all AWS Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.</p> </li> <li> <p> <a href=\"http://docs.aws.amazon.com/general/latest/gr/rande.html#sg_region\">AWS Storage Gateway Regions and Endpoints:</a> Provides a list of each AWS region and endpoints available for use with AWS Storage Gateway. </p> </li> </ul> <note> <p>AWS Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be <code>vol-AA22BB012345DAF670</code>. When you use this ID with the EC2 API, you must change it to <code>vol-aa22bb012345daf670</code>. Otherwise, the EC2 API might not behave as expected.</p> </note> <important> <p>IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see <a href=\"https://aws.amazon.com/ec2/faqs/#longer-ids\">Longer EC2 and EBS Resource IDs</a>. </p> <p> For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:</p> <p> <code>arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG</code>.</p> <p>A snapshot ID with the longer ID format looks like the following: <code>snap-78e226633445566ee</code>.</p> <p>For more information, see <a href=\"https://forums.aws.amazon.com/ann.jspa?annID=3557\">Announcement: Heads-up – Longer AWS Storage Gateway volume and snapshot IDs coming in 2016</a>.</p> </important>"
}
