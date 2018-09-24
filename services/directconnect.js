awsim['directconnect'] = {
  "version":"2.0",
  "metadata":{
    "apiVersion":"2012-10-25",
    "endpointPrefix":"directconnect",
    "jsonVersion":"1.1",
    "protocol":"json",
    "serviceFullName":"AWS Direct Connect",
    "serviceId":"Direct Connect",
    "signatureVersion":"v4",
    "targetPrefix":"OvertureService",
    "uid":"directconnect-2012-10-25"
  },
  "operations":{
    "AllocateConnectionOnInterconnect":{
      "name":"AllocateConnectionOnInterconnect",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AllocateConnectionOnInterconnectRequest"},
      "output":{"shape":"Connection"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deprecated in favor of <a>AllocateHostedConnection</a>.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect.</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>",
      "deprecated":true
    },
    "AllocateHostedConnection":{
      "name":"AllocateHostedConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AllocateHostedConnectionRequest"},
      "output":{"shape":"Connection"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a hosted connection on an interconnect or a link aggregation group (LAG).</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the given interconnect or LAG.</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>"
    },
    "AllocatePrivateVirtualInterface":{
      "name":"AllocatePrivateVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AllocatePrivateVirtualInterfaceRequest"},
      "output":{"shape":"VirtualInterface"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Provisions a private virtual interface to be owned by another AWS customer.</p> <p>Virtual interfaces created using this action must be confirmed by the virtual interface owner by using the <a>ConfirmPrivateVirtualInterface</a> action. Until then, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.</p>"
    },
    "AllocatePublicVirtualInterface":{
      "name":"AllocatePublicVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AllocatePublicVirtualInterfaceRequest"},
      "output":{"shape":"VirtualInterface"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Provisions a public virtual interface to be owned by a different customer.</p> <p>The owner of a connection calls this function to provision a public virtual interface which will be owned by another AWS customer.</p> <p>Virtual interfaces created using this function must be confirmed by the virtual interface owner by calling ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface will be in 'Confirming' state, and will not be available for handling traffic.</p> <p>When creating an IPv6 public virtual interface (addressFamily is 'ipv6'), the customer and amazon address fields should be left blank to use auto-assigned IPv6 space. Custom IPv6 Addresses are currently not supported.</p>"
    },
    "AssociateConnectionWithLag":{
      "name":"AssociateConnectionWithLag",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateConnectionWithLagRequest"},
      "output":{"shape":"Connection"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to AWS will be interrupted). The connection must be hosted on the same AWS Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can reassociate a connection that's currently associated with a different LAG; however, if removing the connection will cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>"
    },
    "AssociateHostedConnection":{
      "name":"AssociateHostedConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateHostedConnectionRequest"},
      "output":{"shape":"Connection"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to AWS as it is being migrated.</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>"
    },
    "AssociateVirtualInterface":{
      "name":"AssociateVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"AssociateVirtualInterfaceRequest"},
      "output":{"shape":"VirtualInterface"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to AWS is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails. </p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>In order to reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG to which the virtual interface will be newly associated.</p>"
    },
    "ConfirmConnection":{
      "name":"ConfirmConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ConfirmConnectionRequest"},
      "output":{"shape":"ConfirmConnectionResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Confirm the creation of a hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the 'Ordering' state, and will remain in this state until the owner calls ConfirmConnection to confirm creation of the hosted connection.</p>"
    },
    "ConfirmPrivateVirtualInterface":{
      "name":"ConfirmPrivateVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ConfirmPrivateVirtualInterfaceRequest"},
      "output":{"shape":"ConfirmPrivateVirtualInterfaceResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Accept ownership of a private virtual interface created by another customer.</p> <p>After the virtual interface owner calls this function, the virtual interface will be created and attached to the given virtual private gateway or direct connect gateway, and will be available for handling traffic.</p>"
    },
    "ConfirmPublicVirtualInterface":{
      "name":"ConfirmPublicVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"ConfirmPublicVirtualInterfaceRequest"},
      "output":{"shape":"ConfirmPublicVirtualInterfaceResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Accept ownership of a public virtual interface created by another customer.</p> <p>After the virtual interface owner calls this function, the specified virtual interface will be created and made available for handling traffic.</p>"
    },
    "CreateBGPPeer":{
      "name":"CreateBGPPeer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateBGPPeerRequest"},
      "output":{"shape":"CreateBGPPeerResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a new BGP peer on a specified virtual interface. The BGP peer cannot be in the same address family (IPv4/IPv6) of an existing BGP peer on the virtual interface.</p> <p>You must create a BGP peer for the corresponding address family in order to access AWS resources that also use that address family.</p> <p>When creating a IPv6 BGP peer, the Amazon address and customer address fields must be left blank. IPv6 addresses are automatically assigned from Amazon's pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already whitelisted for the virtual interface.</p>"
    },
    "CreateConnection":{
      "name":"CreateConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateConnectionRequest"},
      "output":{"shape":"Connection"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a new connection between the customer network and a specific AWS Direct Connect location.</p> <p>A connection links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with. You can establish connections with AWS Direct Connect locations in multiple regions, but a connection in one region does not provide connectivity to other regions.</p> <p>To find the locations for your region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection will be created.</p>"
    },
    "CreateDirectConnectGateway":{
      "name":"CreateDirectConnectGateway",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDirectConnectGatewayRequest"},
      "output":{"shape":"CreateDirectConnectGatewayResult"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a new direct connect gateway. A direct connect gateway is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. direct connect gateways are global and visible in any AWS region after they are created. The virtual interfaces and virtual private gateways that are connected through a direct connect gateway can be in different regions. This enables you to connect to a VPC in any region, regardless of the region in which the virtual interfaces are located, and pass traffic between them.</p>"
    },
    "CreateDirectConnectGatewayAssociation":{
      "name":"CreateDirectConnectGatewayAssociation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateDirectConnectGatewayAssociationRequest"},
      "output":{"shape":"CreateDirectConnectGatewayAssociationResult"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates an association between a direct connect gateway and a virtual private gateway (VGW). The VGW must be attached to a VPC and must not be associated with another direct connect gateway.</p>"
    },
    "CreateInterconnect":{
      "name":"CreateInterconnect",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateInterconnectRequest"},
      "output":{"shape":"Interconnect"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a new interconnect between a AWS Direct Connect partner's network and a specific AWS Direct Connect location.</p> <p>An interconnect is a connection which is capable of hosting other connections. The AWS Direct Connect partner can use an interconnect to provide sub-1Gbps AWS Direct Connect service to tier 2 customers who do not have their own connections. Like a standard connection, an interconnect links the AWS Direct Connect partner's network to an AWS Direct Connect location over a standard 1 Gbps or 10 Gbps Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an AWS Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same AWS Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect will be created.</p> <p>For each end customer, the AWS Direct Connect partner provisions a connection on their interconnect by calling AllocateConnectionOnInterconnect. The end customer can then connect to AWS resources by creating a virtual interface on their connection, using the VLAN assigned to them by the AWS Direct Connect partner.</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>"
    },
    "CreateLag":{
      "name":"CreateLag",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreateLagRequest"},
      "output":{"shape":"Lag"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a new link aggregation group (LAG) with the specified number of bundled physical connections between the customer network and a specific AWS Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple 1 gigabit or 10 gigabit interfaces, allowing you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (for example, 10 Gbps), and must terminate at the same AWS Direct Connect endpoint.</p> <p>You can have up to 10 connections per LAG. Regardless of this limit, if you request more connections for the LAG than AWS Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical connection or hosted connections, and re-establishes them as a member of the LAG. The LAG will be created on the same AWS Direct Connect endpoint to which the connection terminates. Any virtual interfaces associated with the connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the AWS account used to create a LAG is a registered AWS Direct Connect partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>"
    },
    "CreatePrivateVirtualInterface":{
      "name":"CreatePrivateVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePrivateVirtualInterfaceRequest"},
      "output":{"shape":"VirtualInterface"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a new private virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A private virtual interface supports sending traffic to a single virtual private cloud (VPC).</p>"
    },
    "CreatePublicVirtualInterface":{
      "name":"CreatePublicVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"CreatePublicVirtualInterfaceRequest"},
      "output":{"shape":"VirtualInterface"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Creates a new public virtual interface. A virtual interface is the VLAN that transports AWS Direct Connect traffic. A public virtual interface supports sending traffic to public services of AWS such as Amazon Simple Storage Service (Amazon S3).</p> <p>When creating an IPv6 public virtual interface (addressFamily is 'ipv6'), the customer and amazon address fields should be left blank to use auto-assigned IPv6 space. Custom IPv6 Addresses are currently not supported.</p>"
    },
    "DeleteBGPPeer":{
      "name":"DeleteBGPPeer",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteBGPPeerRequest"},
      "output":{"shape":"DeleteBGPPeerResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deletes a BGP peer on the specified virtual interface that matches the specified customer address and ASN. You cannot delete the last BGP peer from a virtual interface.</p>"
    },
    "DeleteConnection":{
      "name":"DeleteConnection",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteConnectionRequest"},
      "output":{"shape":"Connection"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deletes the connection.</p> <p>Deleting a connection only stops the AWS Direct Connect port hour and data transfer charges. You need to cancel separately with the providers any services or charges for cross-connects or network circuits that connect you to the AWS Direct Connect location.</p>"
    },
    "DeleteDirectConnectGateway":{
      "name":"DeleteDirectConnectGateway",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDirectConnectGatewayRequest"},
      "output":{"shape":"DeleteDirectConnectGatewayResult"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deletes a direct connect gateway. You must first delete all virtual interfaces that are attached to the direct connect gateway and disassociate all virtual private gateways that are associated with the direct connect gateway.</p>"
    },
    "DeleteDirectConnectGatewayAssociation":{
      "name":"DeleteDirectConnectGatewayAssociation",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteDirectConnectGatewayAssociationRequest"},
      "output":{"shape":"DeleteDirectConnectGatewayAssociationResult"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deletes the association between a direct connect gateway and a virtual private gateway.</p>"
    },
    "DeleteInterconnect":{
      "name":"DeleteInterconnect",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteInterconnectRequest"},
      "output":{"shape":"DeleteInterconnectResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deletes the specified interconnect.</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>"
    },
    "DeleteLag":{
      "name":"DeleteLag",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteLagRequest"},
      "output":{"shape":"Lag"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deletes a link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.</p>"
    },
    "DeleteVirtualInterface":{
      "name":"DeleteVirtualInterface",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DeleteVirtualInterfaceRequest"},
      "output":{"shape":"DeleteVirtualInterfaceResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deletes a virtual interface.</p>"
    },
    "DescribeConnectionLoa":{
      "name":"DescribeConnectionLoa",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConnectionLoaRequest"},
      "output":{"shape":"DescribeConnectionLoaResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deprecated in favor of <a>DescribeLoa</a>.</p> <p>Returns the LOA-CFA for a Connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to AWS at the colocation facility. For more information, see <a href=\"http://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html\">Requesting Cross Connects at AWS Direct Connect Locations</a> in the AWS Direct Connect user guide.</p>",
      "deprecated":true
    },
    "DescribeConnections":{
      "name":"DescribeConnections",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConnectionsRequest"},
      "output":{"shape":"Connections"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Displays all connections in this region.</p> <p>If a connection ID is provided, the call returns only that particular connection.</p>"
    },
    "DescribeConnectionsOnInterconnect":{
      "name":"DescribeConnectionsOnInterconnect",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeConnectionsOnInterconnectRequest"},
      "output":{"shape":"Connections"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deprecated in favor of <a>DescribeHostedConnections</a>.</p> <p>Returns a list of connections that have been provisioned on the given interconnect.</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>",
      "deprecated":true
    },
    "DescribeDirectConnectGatewayAssociations":{
      "name":"DescribeDirectConnectGatewayAssociations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDirectConnectGatewayAssociationsRequest"},
      "output":{"shape":"DescribeDirectConnectGatewayAssociationsResult"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns a list of all direct connect gateway and virtual private gateway (VGW) associations. Either a direct connect gateway ID or a VGW ID must be provided in the request. If a direct connect gateway ID is provided, the response returns all VGWs associated with the direct connect gateway. If a VGW ID is provided, the response returns all direct connect gateways associated with the VGW. If both are provided, the response only returns the association that matches both the direct connect gateway and the VGW.</p>"
    },
    "DescribeDirectConnectGatewayAttachments":{
      "name":"DescribeDirectConnectGatewayAttachments",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDirectConnectGatewayAttachmentsRequest"},
      "output":{"shape":"DescribeDirectConnectGatewayAttachmentsResult"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns a list of all direct connect gateway and virtual interface (VIF) attachments. Either a direct connect gateway ID or a VIF ID must be provided in the request. If a direct connect gateway ID is provided, the response returns all VIFs attached to the direct connect gateway. If a VIF ID is provided, the response returns all direct connect gateways attached to the VIF. If both are provided, the response only returns the attachment that matches both the direct connect gateway and the VIF.</p>"
    },
    "DescribeDirectConnectGateways":{
      "name":"DescribeDirectConnectGateways",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeDirectConnectGatewaysRequest"},
      "output":{"shape":"DescribeDirectConnectGatewaysResult"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns a list of direct connect gateways in your account. Deleted direct connect gateways are not returned. You can provide a direct connect gateway ID in the request to return information about the specific direct connect gateway only. Otherwise, if a direct connect gateway ID is not provided, information about all of your direct connect gateways is returned. </p>"
    },
    "DescribeHostedConnections":{
      "name":"DescribeHostedConnections",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeHostedConnectionsRequest"},
      "output":{"shape":"Connections"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns a list of hosted connections that have been provisioned on the given interconnect or link aggregation group (LAG).</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>"
    },
    "DescribeInterconnectLoa":{
      "name":"DescribeInterconnectLoa",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeInterconnectLoaRequest"},
      "output":{"shape":"DescribeInterconnectLoaResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Deprecated in favor of <a>DescribeLoa</a>.</p> <p>Returns the LOA-CFA for an Interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href=\"http://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html\">Requesting Cross Connects at AWS Direct Connect Locations</a> in the AWS Direct Connect user guide.</p>",
      "deprecated":true
    },
    "DescribeInterconnects":{
      "name":"DescribeInterconnects",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeInterconnectsRequest"},
      "output":{"shape":"Interconnects"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns a list of interconnects owned by the AWS account.</p> <p>If an interconnect ID is provided, it will only return this particular interconnect.</p>"
    },
    "DescribeLags":{
      "name":"DescribeLags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeLagsRequest"},
      "output":{"shape":"Lags"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Describes the link aggregation groups (LAGs) in your account. </p> <p>If a LAG ID is provided, only information about the specified LAG is returned.</p>"
    },
    "DescribeLoa":{
      "name":"DescribeLoa",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeLoaRequest"},
      "output":{"shape":"Loa"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility. For more information, see <a href=\"http://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html\">Requesting Cross Connects at AWS Direct Connect Locations</a> in the AWS Direct Connect user guide.</p>"
    },
    "DescribeLocations":{
      "name":"DescribeLocations",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "output":{"shape":"Locations"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns the list of AWS Direct Connect locations in the current AWS region. These are the locations that may be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.</p>"
    },
    "DescribeTags":{
      "name":"DescribeTags",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeTagsRequest"},
      "output":{"shape":"DescribeTagsResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Describes the tags associated with the specified Direct Connect resources.</p>"
    },
    "DescribeVirtualGateways":{
      "name":"DescribeVirtualGateways",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "output":{"shape":"VirtualGateways"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Returns a list of virtual private gateways owned by the AWS account.</p> <p>You can create one or more AWS Direct Connect private virtual interfaces linking to a virtual private gateway. A virtual private gateway can be managed via Amazon Virtual Private Cloud (VPC) console or the <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html\">EC2 CreateVpnGateway</a> action.</p>"
    },
    "DescribeVirtualInterfaces":{
      "name":"DescribeVirtualInterfaces",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DescribeVirtualInterfacesRequest"},
      "output":{"shape":"VirtualInterfaces"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Displays all virtual interfaces for an AWS account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer.</p>"
    },
    "DisassociateConnectionFromLag":{
      "name":"DisassociateConnectionFromLag",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"DisassociateConnectionFromLagRequest"},
      "output":{"shape":"Connection"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an AWS Direct Connect partner is automatically converted to an interconnect.</p> <p>If disassociating the connection will cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>"
    },
    "TagResource":{
      "name":"TagResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"TagResourceRequest"},
      "output":{"shape":"TagResourceResponse"},
      "errors":[
        {"shape":"DuplicateTagKeysException"},
        {"shape":"TooManyTagsException"},
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Adds the specified tags to the specified Direct Connect resource. Each Direct Connect resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the Direct Connect resource, this action updates its value.</p>"
    },
    "UntagResource":{
      "name":"UntagResource",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UntagResourceRequest"},
      "output":{"shape":"UntagResourceResponse"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Removes one or more tags from the specified Direct Connect resource.</p>"
    },
    "UpdateLag":{
      "name":"UpdateLag",
      "http":{
        "method":"POST",
        "requestUri":"/"
      },
      "input":{"shape":"UpdateLagRequest"},
      "output":{"shape":"Lag"},
      "errors":[
        {"shape":"DirectConnectServerException"},
        {"shape":"DirectConnectClientException"}
      ],
      "documentation":"<p>Updates the attributes of a link aggregation group (LAG). </p> <p>You can update the following attributes: </p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> </ul> <p>When you create a LAG, the default value for the minimum number of operational connections is zero (0). If you update this value, and the number of operational connections falls below the specified value, the LAG will automatically go down to avoid overutilization of the remaining connections. Adjusting this value should be done with care as it could force the LAG down if the value is set higher than the current number of operational connections.</p>"
    }
  },
  "shapes":{
    "ASN":{
      "type":"integer",
      "documentation":"<p>The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.</p> <p>Example: 65000</p>"
    },
    "AddressFamily":{
      "type":"string",
      "documentation":"<p>Indicates the address family for the BGP peer.</p> <ul> <li> <p> <b>ipv4</b>: IPv4 address family</p> </li> <li> <p> <b>ipv6</b>: IPv6 address family</p> </li> </ul>",
      "enum":[
        "ipv4",
        "ipv6"
      ]
    },
    "AllocateConnectionOnInterconnectRequest":{
      "type":"structure",
      "required":[
        "bandwidth",
        "connectionName",
        "ownerAccount",
        "interconnectId",
        "vlan"
      ],
      "members":{
        "bandwidth":{
          "shape":"Bandwidth",
          "documentation":"<p>Bandwidth of the connection.</p> <p>Example: \"<i>500Mbps</i>\"</p> <p>Default: None</p> <p>Values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps</p>"
        },
        "connectionName":{
          "shape":"ConnectionName",
          "documentation":"<p>Name of the provisioned connection.</p> <p>Example: \"<i>500M Connection to AWS</i>\"</p> <p>Default: None</p>"
        },
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>Numeric account Id of the customer for whom the connection will be provisioned.</p> <p>Example: 123443215678</p> <p>Default: None</p>"
        },
        "interconnectId":{
          "shape":"InterconnectId",
          "documentation":"<p>ID of the interconnect on which the connection will be provisioned.</p> <p>Example: dxcon-456abc78</p> <p>Default: None</p>"
        },
        "vlan":{
          "shape":"VLAN",
          "documentation":"<p>The dedicated VLAN provisioned to the connection.</p> <p>Example: 101</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the AllocateConnectionOnInterconnect operation.</p>"
    },
    "AllocateHostedConnectionRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "ownerAccount",
        "bandwidth",
        "connectionName",
        "vlan"
      ],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of the interconnect or LAG on which the connection will be provisioned.</p> <p>Example: dxcon-456abc78 or dxlag-abc123</p> <p>Default: None</p>"
        },
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The numeric account ID of the customer for whom the connection will be provisioned.</p> <p>Example: 123443215678</p> <p>Default: None</p>"
        },
        "bandwidth":{
          "shape":"Bandwidth",
          "documentation":"<p>The bandwidth of the connection.</p> <p>Example: <code>500Mbps</code> </p> <p>Default: None</p> <p>Values: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, or 500Mbps</p>"
        },
        "connectionName":{
          "shape":"ConnectionName",
          "documentation":"<p>The name of the provisioned connection.</p> <p>Example: \"<code>500M Connection to AWS</code>\"</p> <p>Default: None</p>"
        },
        "vlan":{
          "shape":"VLAN",
          "documentation":"<p>The dedicated VLAN provisioned to the hosted connection.</p> <p>Example: 101</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to theHostedConnection operation.</p>"
    },
    "AllocatePrivateVirtualInterfaceRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "ownerAccount",
        "newPrivateVirtualInterfaceAllocation"
      ],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The connection ID on which the private virtual interface is provisioned.</p> <p>Default: None</p>"
        },
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The AWS account that will own the new private virtual interface.</p> <p>Default: None</p>"
        },
        "newPrivateVirtualInterfaceAllocation":{
          "shape":"NewPrivateVirtualInterfaceAllocation",
          "documentation":"<p>Detailed information for the private virtual interface to be provisioned.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the AllocatePrivateVirtualInterface operation.</p>"
    },
    "AllocatePublicVirtualInterfaceRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "ownerAccount",
        "newPublicVirtualInterfaceAllocation"
      ],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The connection ID on which the public virtual interface is provisioned.</p> <p>Default: None</p>"
        },
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The AWS account that will own the new public virtual interface.</p> <p>Default: None</p>"
        },
        "newPublicVirtualInterfaceAllocation":{
          "shape":"NewPublicVirtualInterfaceAllocation",
          "documentation":"<p>Detailed information for the public virtual interface to be provisioned.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the AllocatePublicVirtualInterface operation.</p>"
    },
    "AmazonAddress":{
      "type":"string",
      "documentation":"<p>IP address assigned to the Amazon interface.</p> <p>Example: 192.168.1.1/30 or 2001:db8::1/125</p>"
    },
    "AssociateConnectionWithLagRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "lagId"
      ],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of the connection.</p> <p>Example: dxcon-abc123</p> <p>Default: None</p>"
        },
        "lagId":{
          "shape":"LagId",
          "documentation":"<p>The ID of the LAG with which to associate the connection.</p> <p>Example: dxlag-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the AssociateConnectionWithLag operation.</p>"
    },
    "AssociateHostedConnectionRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "parentConnectionId"
      ],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of the hosted connection.</p> <p>Example: dxcon-abc123</p> <p>Default: None</p>"
        },
        "parentConnectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of the interconnect or the LAG.</p> <p>Example: dxcon-abc123 or dxlag-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the AssociateHostedConnection operation.</p>"
    },
    "AssociateVirtualInterfaceRequest":{
      "type":"structure",
      "required":[
        "virtualInterfaceId",
        "connectionId"
      ],
      "members":{
        "virtualInterfaceId":{
          "shape":"VirtualInterfaceId",
          "documentation":"<p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>"
        },
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of the LAG or connection with which to associate the virtual interface.</p> <p>Example: dxlag-abc123 or dxcon-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the AssociateVirtualInterface operation.</p>"
    },
    "AwsDevice":{
      "type":"string",
      "documentation":"<p>An abstract ID for the physical Direct Connect endpoint.</p> <p>Example: EQC50-abcdef123456</p>",
      "deprecated":true
    },
    "AwsDeviceV2":{"type":"string"},
    "BGPAuthKey":{
      "type":"string",
      "documentation":"<p>The authentication key for BGP configuration.</p> <p>Example: asdf34example</p>"
    },
    "BGPPeer":{
      "type":"structure",
      "members":{
        "asn":{"shape":"ASN"},
        "authKey":{"shape":"BGPAuthKey"},
        "addressFamily":{"shape":"AddressFamily"},
        "amazonAddress":{"shape":"AmazonAddress"},
        "customerAddress":{"shape":"CustomerAddress"},
        "bgpPeerState":{"shape":"BGPPeerState"},
        "bgpStatus":{"shape":"BGPStatus"},
        "awsDeviceV2":{
          "shape":"AwsDeviceV2",
          "documentation":"<p>The Direct Connection endpoint which the BGP peer terminates on.</p>"
        }
      },
      "documentation":"<p>A structure containing information about a BGP peer.</p>"
    },
    "BGPPeerList":{
      "type":"list",
      "member":{"shape":"BGPPeer"},
      "documentation":"<p>A list of the BGP peers configured on this virtual interface.</p>"
    },
    "BGPPeerState":{
      "type":"string",
      "documentation":"<p>The state of the BGP peer.</p> <ul> <li> <p> <b>Verifying</b>: The BGP peering addresses or ASN require validation before the BGP peer can be created. This state only applies to BGP peers on a public virtual interface. </p> </li> <li> <p> <b>Pending</b>: The BGP peer has been created, and is in this state until it is ready to be established.</p> </li> <li> <p> <b>Available</b>: The BGP peer can be established.</p> </li> <li> <p> <b>Deleting</b>: The BGP peer is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The BGP peer has been deleted and cannot be established.</p> </li> </ul>",
      "enum":[
        "verifying",
        "pending",
        "available",
        "deleting",
        "deleted"
      ]
    },
    "BGPStatus":{
      "type":"string",
      "documentation":"<p>The Up/Down state of the BGP peer.</p> <ul> <li> <p> <b>Up</b>: The BGP peer is established.</p> <note> <p>A state of <code>up</code> does not indicate the state of the routing function. Ensure that you are receiving routes over the BGP session.</p> </note> </li> <li> <p> <b>Down</b>: The BGP peer is down.</p> </li> </ul>",
      "enum":[
        "up",
        "down"
      ]
    },
    "Bandwidth":{
      "type":"string",
      "documentation":"<p>Bandwidth of the connection.</p> <p>Example: 1Gbps</p> <p>Default: None</p>"
    },
    "BooleanFlag":{"type":"boolean"},
    "CIDR":{"type":"string"},
    "ConfirmConnectionRequest":{
      "type":"structure",
      "required":["connectionId"],
      "members":{
        "connectionId":{"shape":"ConnectionId"}
      },
      "documentation":"<p>Container for the parameters to the ConfirmConnection operation.</p>"
    },
    "ConfirmConnectionResponse":{
      "type":"structure",
      "members":{
        "connectionState":{"shape":"ConnectionState"}
      },
      "documentation":"<p>The response received when ConfirmConnection is called.</p>"
    },
    "ConfirmPrivateVirtualInterfaceRequest":{
      "type":"structure",
      "required":["virtualInterfaceId"],
      "members":{
        "virtualInterfaceId":{"shape":"VirtualInterfaceId"},
        "virtualGatewayId":{
          "shape":"VirtualGatewayId",
          "documentation":"<p>ID of the virtual private gateway that will be attached to the virtual interface.</p> <p> A virtual private gateway can be managed via the Amazon Virtual Private Cloud (VPC) console or the <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html\">EC2 CreateVpnGateway</a> action.</p> <p>Default: None</p>"
        },
        "directConnectGatewayId":{
          "shape":"DirectConnectGatewayId",
          "documentation":"<p>ID of the direct connect gateway that will be attached to the virtual interface.</p> <p> A direct connect gateway can be managed via the AWS Direct Connect console or the <a>CreateDirectConnectGateway</a> action.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the ConfirmPrivateVirtualInterface operation.</p>"
    },
    "ConfirmPrivateVirtualInterfaceResponse":{
      "type":"structure",
      "members":{
        "virtualInterfaceState":{"shape":"VirtualInterfaceState"}
      },
      "documentation":"<p>The response received when ConfirmPrivateVirtualInterface is called.</p>"
    },
    "ConfirmPublicVirtualInterfaceRequest":{
      "type":"structure",
      "required":["virtualInterfaceId"],
      "members":{
        "virtualInterfaceId":{"shape":"VirtualInterfaceId"}
      },
      "documentation":"<p>Container for the parameters to the ConfirmPublicVirtualInterface operation.</p>"
    },
    "ConfirmPublicVirtualInterfaceResponse":{
      "type":"structure",
      "members":{
        "virtualInterfaceState":{"shape":"VirtualInterfaceState"}
      },
      "documentation":"<p>The response received when ConfirmPublicVirtualInterface is called.</p>"
    },
    "Connection":{
      "type":"structure",
      "members":{
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The AWS account that will own the new connection.</p>"
        },
        "connectionId":{"shape":"ConnectionId"},
        "connectionName":{"shape":"ConnectionName"},
        "connectionState":{"shape":"ConnectionState"},
        "region":{"shape":"Region"},
        "location":{"shape":"LocationCode"},
        "bandwidth":{
          "shape":"Bandwidth",
          "documentation":"<p>Bandwidth of the connection.</p> <p>Example: 1Gbps (for regular connections), or 500Mbps (for hosted connections)</p> <p>Default: None</p>"
        },
        "vlan":{"shape":"VLAN"},
        "partnerName":{
          "shape":"PartnerName",
          "documentation":"<p>The name of the AWS Direct Connect service provider associated with the connection.</p>"
        },
        "loaIssueTime":{
          "shape":"LoaIssueTime",
          "documentation":"<p>The time of the most recent call to <a>DescribeLoa</a> for this connection.</p>"
        },
        "lagId":{"shape":"LagId"},
        "awsDevice":{
          "shape":"AwsDevice",
          "documentation":"<p>Deprecated in favor of awsDeviceV2.</p> <p>The Direct Connection endpoint which the physical connection terminates on.</p>"
        },
        "awsDeviceV2":{
          "shape":"AwsDeviceV2",
          "documentation":"<p>The Direct Connection endpoint which the physical connection terminates on.</p>"
        }
      },
      "documentation":"<p>A connection represents the physical network connection between the AWS Direct Connect location and the customer.</p>"
    },
    "ConnectionId":{
      "type":"string",
      "documentation":"<p>The ID of the connection. This field is also used as the ID type for operations that use multiple connection types (LAG, interconnect, and/or connection).</p> <p>Example: dxcon-fg5678gh</p> <p>Default: None</p>"
    },
    "ConnectionList":{
      "type":"list",
      "member":{"shape":"Connection"},
      "documentation":"<p>A list of connections.</p>"
    },
    "ConnectionName":{
      "type":"string",
      "documentation":"<p>The name of the connection.</p> <p>Example: \"<i>My Connection to AWS</i>\"</p> <p>Default: None</p>"
    },
    "ConnectionState":{
      "type":"string",
      "documentation":"<p>State of the connection.</p> <ul> <li> <p> <b>Ordering</b>: The initial state of a hosted connection provisioned on an interconnect. The connection stays in the ordering state until the owner of the hosted connection confirms or declines the connection order.</p> </li> <li> <p> <b>Requested</b>: The initial state of a standard connection. The connection stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <b>Pending</b>: The connection has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is up, and the connection is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The connection is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The connection has been deleted.</p> </li> <li> <p> <b>Rejected</b>: A hosted connection in the 'Ordering' state will enter the 'Rejected' state if it is deleted by the end customer.</p> </li> </ul>",
      "enum":[
        "ordering",
        "requested",
        "pending",
        "available",
        "down",
        "deleting",
        "deleted",
        "rejected"
      ]
    },
    "Connections":{
      "type":"structure",
      "members":{
        "connections":{
          "shape":"ConnectionList",
          "documentation":"<p>A list of connections.</p>"
        }
      },
      "documentation":"<p>A structure containing a list of connections.</p>"
    },
    "Count":{"type":"integer"},
    "CreateBGPPeerRequest":{
      "type":"structure",
      "members":{
        "virtualInterfaceId":{
          "shape":"VirtualInterfaceId",
          "documentation":"<p>The ID of the virtual interface on which the BGP peer will be provisioned.</p> <p>Example: dxvif-456abc78</p> <p>Default: None</p>"
        },
        "newBGPPeer":{
          "shape":"NewBGPPeer",
          "documentation":"<p>Detailed information for the BGP peer to be created.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the CreateBGPPeer operation.</p>"
    },
    "CreateBGPPeerResponse":{
      "type":"structure",
      "members":{
        "virtualInterface":{"shape":"VirtualInterface"}
      },
      "documentation":"<p>The response received when CreateBGPPeer is called.</p>"
    },
    "CreateConnectionRequest":{
      "type":"structure",
      "required":[
        "location",
        "bandwidth",
        "connectionName"
      ],
      "members":{
        "location":{"shape":"LocationCode"},
        "bandwidth":{"shape":"Bandwidth"},
        "connectionName":{"shape":"ConnectionName"},
        "lagId":{"shape":"LagId"}
      },
      "documentation":"<p>Container for the parameters to the CreateConnection operation.</p>"
    },
    "CreateDirectConnectGatewayAssociationRequest":{
      "type":"structure",
      "required":[
        "directConnectGatewayId",
        "virtualGatewayId"
      ],
      "members":{
        "directConnectGatewayId":{
          "shape":"DirectConnectGatewayId",
          "documentation":"<p>The ID of the direct connect gateway.</p> <p>Example: \"abcd1234-dcba-5678-be23-cdef9876ab45\"</p> <p>Default: None</p>"
        },
        "virtualGatewayId":{
          "shape":"VirtualGatewayId",
          "documentation":"<p>The ID of the virtual private gateway.</p> <p>Example: \"vgw-abc123ef\"</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the CreateDirectConnectGatewayAssociation operation.</p>"
    },
    "CreateDirectConnectGatewayAssociationResult":{
      "type":"structure",
      "members":{
        "directConnectGatewayAssociation":{
          "shape":"DirectConnectGatewayAssociation",
          "documentation":"<p>The direct connect gateway association to be created.</p>"
        }
      },
      "documentation":"<p>Container for the response from the CreateDirectConnectGatewayAssociation API call</p>"
    },
    "CreateDirectConnectGatewayRequest":{
      "type":"structure",
      "required":["directConnectGatewayName"],
      "members":{
        "directConnectGatewayName":{
          "shape":"DirectConnectGatewayName",
          "documentation":"<p>The name of the direct connect gateway.</p> <p>Example: \"My direct connect gateway\"</p> <p>Default: None</p>"
        },
        "amazonSideAsn":{
          "shape":"LongAsn",
          "documentation":"<p>The autonomous system number (ASN) for Border Gateway Protocol (BGP) to be configured on the Amazon side of the connection. The ASN must be in the private range of 64,512 to 65,534 or 4,200,000,000 to 4,294,967,294 </p> <p>Example: 65200</p> <p>Default: 64512</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the CreateDirectConnectGateway operation.</p>"
    },
    "CreateDirectConnectGatewayResult":{
      "type":"structure",
      "members":{
        "directConnectGateway":{
          "shape":"DirectConnectGateway",
          "documentation":"<p>The direct connect gateway to be created.</p>"
        }
      },
      "documentation":"<p>Container for the response from the CreateDirectConnectGateway API call</p>"
    },
    "CreateInterconnectRequest":{
      "type":"structure",
      "required":[
        "interconnectName",
        "bandwidth",
        "location"
      ],
      "members":{
        "interconnectName":{
          "shape":"InterconnectName",
          "documentation":"<p>The name of the interconnect.</p> <p>Example: \"<i>1G Interconnect to AWS</i>\"</p> <p>Default: None</p>"
        },
        "bandwidth":{
          "shape":"Bandwidth",
          "documentation":"<p>The port bandwidth</p> <p>Example: 1Gbps</p> <p>Default: None</p> <p>Available values: 1Gbps,10Gbps</p>"
        },
        "location":{
          "shape":"LocationCode",
          "documentation":"<p>Where the interconnect is located</p> <p>Example: EqSV5</p> <p>Default: None</p>"
        },
        "lagId":{"shape":"LagId"}
      },
      "documentation":"<p>Container for the parameters to the CreateInterconnect operation.</p>"
    },
    "CreateLagRequest":{
      "type":"structure",
      "required":[
        "numberOfConnections",
        "location",
        "connectionsBandwidth",
        "lagName"
      ],
      "members":{
        "numberOfConnections":{
          "shape":"Count",
          "documentation":"<p>The number of physical connections initially provisioned and bundled by the LAG.</p> <p>Default: None</p>"
        },
        "location":{
          "shape":"LocationCode",
          "documentation":"<p>The AWS Direct Connect location in which the LAG should be allocated.</p> <p>Example: EqSV5</p> <p>Default: None</p>"
        },
        "connectionsBandwidth":{
          "shape":"Bandwidth",
          "documentation":"<p>The bandwidth of the individual physical connections bundled by the LAG.</p> <p>Default: None</p> <p>Available values: 1Gbps, 10Gbps</p>"
        },
        "lagName":{
          "shape":"LagName",
          "documentation":"<p>The name of the LAG.</p> <p>Example: \"<code>3x10G LAG to AWS</code>\"</p> <p>Default: None</p>"
        },
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of an existing connection to migrate to the LAG.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the CreateLag operation.</p>"
    },
    "CreatePrivateVirtualInterfaceRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "newPrivateVirtualInterface"
      ],
      "members":{
        "connectionId":{"shape":"ConnectionId"},
        "newPrivateVirtualInterface":{
          "shape":"NewPrivateVirtualInterface",
          "documentation":"<p>Detailed information for the private virtual interface to be created.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the CreatePrivateVirtualInterface operation.</p>"
    },
    "CreatePublicVirtualInterfaceRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "newPublicVirtualInterface"
      ],
      "members":{
        "connectionId":{"shape":"ConnectionId"},
        "newPublicVirtualInterface":{
          "shape":"NewPublicVirtualInterface",
          "documentation":"<p>Detailed information for the public virtual interface to be created.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the CreatePublicVirtualInterface operation.</p>"
    },
    "CustomerAddress":{
      "type":"string",
      "documentation":"<p>IP address assigned to the customer interface.</p> <p>Example: 192.168.1.2/30 or 2001:db8::2/125</p>"
    },
    "DeleteBGPPeerRequest":{
      "type":"structure",
      "members":{
        "virtualInterfaceId":{
          "shape":"VirtualInterfaceId",
          "documentation":"<p>The ID of the virtual interface from which the BGP peer will be deleted.</p> <p>Example: dxvif-456abc78</p> <p>Default: None</p>"
        },
        "asn":{"shape":"ASN"},
        "customerAddress":{"shape":"CustomerAddress"}
      },
      "documentation":"<p>Container for the parameters to the DeleteBGPPeer operation.</p>"
    },
    "DeleteBGPPeerResponse":{
      "type":"structure",
      "members":{
        "virtualInterface":{"shape":"VirtualInterface"}
      },
      "documentation":"<p>The response received when DeleteBGPPeer is called.</p>"
    },
    "DeleteConnectionRequest":{
      "type":"structure",
      "required":["connectionId"],
      "members":{
        "connectionId":{"shape":"ConnectionId"}
      },
      "documentation":"<p>Container for the parameters to the DeleteConnection operation.</p>"
    },
    "DeleteDirectConnectGatewayAssociationRequest":{
      "type":"structure",
      "required":[
        "directConnectGatewayId",
        "virtualGatewayId"
      ],
      "members":{
        "directConnectGatewayId":{
          "shape":"DirectConnectGatewayId",
          "documentation":"<p>The ID of the direct connect gateway.</p> <p>Example: \"abcd1234-dcba-5678-be23-cdef9876ab45\"</p> <p>Default: None</p>"
        },
        "virtualGatewayId":{
          "shape":"VirtualGatewayId",
          "documentation":"<p>The ID of the virtual private gateway.</p> <p>Example: \"vgw-abc123ef\"</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DeleteDirectConnectGatewayAssociation operation.</p>"
    },
    "DeleteDirectConnectGatewayAssociationResult":{
      "type":"structure",
      "members":{
        "directConnectGatewayAssociation":{
          "shape":"DirectConnectGatewayAssociation",
          "documentation":"<p>The direct connect gateway association to be deleted.</p>"
        }
      },
      "documentation":"<p>Container for the response from the DeleteDirectConnectGatewayAssociation API call</p>"
    },
    "DeleteDirectConnectGatewayRequest":{
      "type":"structure",
      "required":["directConnectGatewayId"],
      "members":{
        "directConnectGatewayId":{
          "shape":"DirectConnectGatewayId",
          "documentation":"<p>The ID of the direct connect gateway.</p> <p>Example: \"abcd1234-dcba-5678-be23-cdef9876ab45\"</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DeleteDirectConnectGateway operation.</p>"
    },
    "DeleteDirectConnectGatewayResult":{
      "type":"structure",
      "members":{
        "directConnectGateway":{
          "shape":"DirectConnectGateway",
          "documentation":"<p>The direct connect gateway to be deleted.</p>"
        }
      },
      "documentation":"<p>Container for the response from the DeleteDirectConnectGateway API call</p>"
    },
    "DeleteInterconnectRequest":{
      "type":"structure",
      "required":["interconnectId"],
      "members":{
        "interconnectId":{"shape":"InterconnectId"}
      },
      "documentation":"<p>Container for the parameters to the DeleteInterconnect operation.</p>"
    },
    "DeleteInterconnectResponse":{
      "type":"structure",
      "members":{
        "interconnectState":{"shape":"InterconnectState"}
      },
      "documentation":"<p>The response received when DeleteInterconnect is called.</p>"
    },
    "DeleteLagRequest":{
      "type":"structure",
      "required":["lagId"],
      "members":{
        "lagId":{
          "shape":"LagId",
          "documentation":"<p>The ID of the LAG to delete.</p> <p>Example: dxlag-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DeleteLag operation.</p>"
    },
    "DeleteVirtualInterfaceRequest":{
      "type":"structure",
      "required":["virtualInterfaceId"],
      "members":{
        "virtualInterfaceId":{"shape":"VirtualInterfaceId"}
      },
      "documentation":"<p>Container for the parameters to the DeleteVirtualInterface operation.</p>"
    },
    "DeleteVirtualInterfaceResponse":{
      "type":"structure",
      "members":{
        "virtualInterfaceState":{"shape":"VirtualInterfaceState"}
      },
      "documentation":"<p>The response received when DeleteVirtualInterface is called.</p>"
    },
    "DescribeConnectionLoaRequest":{
      "type":"structure",
      "required":["connectionId"],
      "members":{
        "connectionId":{"shape":"ConnectionId"},
        "providerName":{
          "shape":"ProviderName",
          "documentation":"<p>The name of the APN partner or service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p> <p>Default: None</p>"
        },
        "loaContentType":{"shape":"LoaContentType"}
      },
      "documentation":"<p>Container for the parameters to the DescribeConnectionLoa operation.</p>"
    },
    "DescribeConnectionLoaResponse":{
      "type":"structure",
      "members":{
        "loa":{"shape":"Loa"}
      },
      "documentation":"<p>The response received when DescribeConnectionLoa is called.</p>"
    },
    "DescribeConnectionsOnInterconnectRequest":{
      "type":"structure",
      "required":["interconnectId"],
      "members":{
        "interconnectId":{
          "shape":"InterconnectId",
          "documentation":"<p>ID of the interconnect on which a list of connection is provisioned.</p> <p>Example: dxcon-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeConnectionsOnInterconnect operation.</p>"
    },
    "DescribeConnectionsRequest":{
      "type":"structure",
      "members":{
        "connectionId":{"shape":"ConnectionId"}
      },
      "documentation":"<p>Container for the parameters to the DescribeConnections operation.</p>"
    },
    "DescribeDirectConnectGatewayAssociationsRequest":{
      "type":"structure",
      "members":{
        "directConnectGatewayId":{
          "shape":"DirectConnectGatewayId",
          "documentation":"<p>The ID of the direct connect gateway.</p> <p>Example: \"abcd1234-dcba-5678-be23-cdef9876ab45\"</p> <p>Default: None</p>"
        },
        "virtualGatewayId":{
          "shape":"VirtualGatewayId",
          "documentation":"<p>The ID of the virtual private gateway.</p> <p>Example: \"vgw-abc123ef\"</p> <p>Default: None</p>"
        },
        "maxResults":{
          "shape":"MaxResultSetSize",
          "documentation":"<p>The maximum number of direct connect gateway associations to return per page.</p> <p>Example: 15</p> <p>Default: None</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token provided in the previous describe result to retrieve the next page of the result.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeDirectConnectGatewayAssociations operation.</p>"
    },
    "DescribeDirectConnectGatewayAssociationsResult":{
      "type":"structure",
      "members":{
        "directConnectGatewayAssociations":{
          "shape":"DirectConnectGatewayAssociationList",
          "documentation":"<p>Information about the direct connect gateway associations.</p>"
        },
        "nextToken":{"shape":"PaginationToken"}
      },
      "documentation":"<p>Container for the response from the DescribeDirectConnectGatewayAssociations API call</p>"
    },
    "DescribeDirectConnectGatewayAttachmentsRequest":{
      "type":"structure",
      "members":{
        "directConnectGatewayId":{
          "shape":"DirectConnectGatewayId",
          "documentation":"<p>The ID of the direct connect gateway.</p> <p>Example: \"abcd1234-dcba-5678-be23-cdef9876ab45\"</p> <p>Default: None</p>"
        },
        "virtualInterfaceId":{
          "shape":"VirtualInterfaceId",
          "documentation":"<p>The ID of the virtual interface.</p> <p>Example: \"dxvif-abc123ef\"</p> <p>Default: None</p>"
        },
        "maxResults":{
          "shape":"MaxResultSetSize",
          "documentation":"<p>The maximum number of direct connect gateway attachments to return per page.</p> <p>Example: 15</p> <p>Default: None</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token provided in the previous describe result to retrieve the next page of the result.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeDirectConnectGatewayAttachments operation.</p>"
    },
    "DescribeDirectConnectGatewayAttachmentsResult":{
      "type":"structure",
      "members":{
        "directConnectGatewayAttachments":{
          "shape":"DirectConnectGatewayAttachmentList",
          "documentation":"<p>Information about the direct connect gateway attachments.</p>"
        },
        "nextToken":{"shape":"PaginationToken"}
      },
      "documentation":"<p>Container for the response from the DescribeDirectConnectGatewayAttachments API call</p>"
    },
    "DescribeDirectConnectGatewaysRequest":{
      "type":"structure",
      "members":{
        "directConnectGatewayId":{
          "shape":"DirectConnectGatewayId",
          "documentation":"<p>The ID of the direct connect gateway.</p> <p>Example: \"abcd1234-dcba-5678-be23-cdef9876ab45\"</p> <p>Default: None</p>"
        },
        "maxResults":{
          "shape":"MaxResultSetSize",
          "documentation":"<p>The maximum number of direct connect gateways to return per page.</p> <p>Example: 15</p> <p>Default: None</p>"
        },
        "nextToken":{
          "shape":"PaginationToken",
          "documentation":"<p>The token provided in the previous describe result to retrieve the next page of the result.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeDirectConnectGateways operation.</p>"
    },
    "DescribeDirectConnectGatewaysResult":{
      "type":"structure",
      "members":{
        "directConnectGateways":{
          "shape":"DirectConnectGatewayList",
          "documentation":"<p>Information about the direct connect gateways.</p>"
        },
        "nextToken":{"shape":"PaginationToken"}
      },
      "documentation":"<p>Container for the response from the DescribeDirectConnectGateways API call</p>"
    },
    "DescribeHostedConnectionsRequest":{
      "type":"structure",
      "required":["connectionId"],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of the interconnect or LAG on which the hosted connections are provisioned.</p> <p>Example: dxcon-abc123 or dxlag-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeHostedConnections operation.</p>"
    },
    "DescribeInterconnectLoaRequest":{
      "type":"structure",
      "required":["interconnectId"],
      "members":{
        "interconnectId":{"shape":"InterconnectId"},
        "providerName":{
          "shape":"ProviderName",
          "documentation":"<p>The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p> <p>Default: None</p>"
        },
        "loaContentType":{"shape":"LoaContentType"}
      },
      "documentation":"<p>Container for the parameters to the DescribeInterconnectLoa operation.</p>"
    },
    "DescribeInterconnectLoaResponse":{
      "type":"structure",
      "members":{
        "loa":{"shape":"Loa"}
      },
      "documentation":"<p>The response received when DescribeInterconnectLoa is called.</p>"
    },
    "DescribeInterconnectsRequest":{
      "type":"structure",
      "members":{
        "interconnectId":{"shape":"InterconnectId"}
      },
      "documentation":"<p>Container for the parameters to the DescribeInterconnects operation.</p>"
    },
    "DescribeLagsRequest":{
      "type":"structure",
      "members":{
        "lagId":{
          "shape":"LagId",
          "documentation":"<p>The ID of the LAG.</p> <p>Example: dxlag-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeLags operation.</p>"
    },
    "DescribeLoaRequest":{
      "type":"structure",
      "required":["connectionId"],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of a connection, LAG, or interconnect for which to get the LOA-CFA information.</p> <p>Example: dxcon-abc123 or dxlag-abc123</p> <p>Default: None</p>"
        },
        "providerName":{
          "shape":"ProviderName",
          "documentation":"<p>The name of the service provider who establishes connectivity on your behalf. If you supply this parameter, the LOA-CFA lists the provider name alongside your company name as the requester of the cross connect.</p> <p>Default: None</p>"
        },
        "loaContentType":{
          "shape":"LoaContentType",
          "documentation":"<p>A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is \"application/pdf\".</p> <p>Default: application/pdf</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeLoa operation.</p>"
    },
    "DescribeTagsRequest":{
      "type":"structure",
      "required":["resourceArns"],
      "members":{
        "resourceArns":{
          "shape":"ResourceArnList",
          "documentation":"<p>The Amazon Resource Names (ARNs) of the Direct Connect resources.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DescribeTags operation.</p>"
    },
    "DescribeTagsResponse":{
      "type":"structure",
      "members":{
        "resourceTags":{
          "shape":"ResourceTagList",
          "documentation":"<p>Information about the tags.</p>"
        }
      },
      "documentation":"<p>The response received when DescribeTags is called.</p>"
    },
    "DescribeVirtualInterfacesRequest":{
      "type":"structure",
      "members":{
        "connectionId":{"shape":"ConnectionId"},
        "virtualInterfaceId":{"shape":"VirtualInterfaceId"}
      },
      "documentation":"<p>Container for the parameters to the DescribeVirtualInterfaces operation.</p>"
    },
    "DirectConnectClientException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ErrorMessage",
          "documentation":"<p>This is an exception thrown when there is an issue with the input provided by the API call. For example, the name provided for a connection contains a pound sign (#). This can also occur when a valid value is provided, but is otherwise constrained. For example, the valid VLAN tag range is 1-4096 but each can only be used once per connection.</p>"
        }
      },
      "documentation":"<p>The API was called with invalid parameters. The error message will contain additional details about the cause.</p>",
      "exception":true
    },
    "DirectConnectGateway":{
      "type":"structure",
      "members":{
        "directConnectGatewayId":{"shape":"DirectConnectGatewayId"},
        "directConnectGatewayName":{"shape":"DirectConnectGatewayName"},
        "amazonSideAsn":{
          "shape":"LongAsn",
          "documentation":"<p>The autonomous system number (ASN) for the Amazon side of the connection.</p>"
        },
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The AWS account ID of the owner of the direct connect gateway.</p>"
        },
        "directConnectGatewayState":{"shape":"DirectConnectGatewayState"},
        "stateChangeError":{"shape":"StateChangeError"}
      },
      "documentation":"<p>A direct connect gateway is an intermediate object that enables you to connect virtual interfaces and virtual private gateways.</p>"
    },
    "DirectConnectGatewayAssociation":{
      "type":"structure",
      "members":{
        "directConnectGatewayId":{"shape":"DirectConnectGatewayId"},
        "virtualGatewayId":{"shape":"VirtualGatewayId"},
        "virtualGatewayRegion":{"shape":"VirtualGatewayRegion"},
        "virtualGatewayOwnerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The AWS account ID of the owner of the virtual private gateway.</p>"
        },
        "associationState":{"shape":"DirectConnectGatewayAssociationState"},
        "stateChangeError":{"shape":"StateChangeError"}
      },
      "documentation":"<p>The association between a direct connect gateway and virtual private gateway.</p>"
    },
    "DirectConnectGatewayAssociationList":{
      "type":"list",
      "member":{"shape":"DirectConnectGatewayAssociation"},
      "documentation":"<p>A list of direct connect gateway associations.</p>"
    },
    "DirectConnectGatewayAssociationState":{
      "type":"string",
      "documentation":"<p>State of the direct connect gateway association.</p> <ul> <li> <p> <b>Associating</b>: The initial state after calling <a>CreateDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <b>Associated</b>: The direct connect gateway and virtual private gateway are successfully associated and ready to pass traffic.</p> </li> <li> <p> <b>Disassociating</b>: The initial state after calling <a>DeleteDirectConnectGatewayAssociation</a>.</p> </li> <li> <p> <b>Disassociated</b>: The virtual private gateway is successfully disassociated from the direct connect gateway. Traffic flow between the direct connect gateway and virtual private gateway stops.</p> </li> </ul>",
      "enum":[
        "associating",
        "associated",
        "disassociating",
        "disassociated"
      ]
    },
    "DirectConnectGatewayAttachment":{
      "type":"structure",
      "members":{
        "directConnectGatewayId":{"shape":"DirectConnectGatewayId"},
        "virtualInterfaceId":{"shape":"VirtualInterfaceId"},
        "virtualInterfaceRegion":{"shape":"VirtualInterfaceRegion"},
        "virtualInterfaceOwnerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The AWS account ID of the owner of the virtual interface.</p>"
        },
        "attachmentState":{"shape":"DirectConnectGatewayAttachmentState"},
        "stateChangeError":{"shape":"StateChangeError"}
      },
      "documentation":"<p>The association between a direct connect gateway and virtual interface.</p>"
    },
    "DirectConnectGatewayAttachmentList":{
      "type":"list",
      "member":{"shape":"DirectConnectGatewayAttachment"},
      "documentation":"<p>A list of direct connect gateway attachments.</p>"
    },
    "DirectConnectGatewayAttachmentState":{
      "type":"string",
      "documentation":"<p>State of the direct connect gateway attachment.</p> <ul> <li> <p> <b>Attaching</b>: The initial state after a virtual interface is created using the direct connect gateway.</p> </li> <li> <p> <b>Attached</b>: The direct connect gateway and virtual interface are successfully attached and ready to pass traffic.</p> </li> <li> <p> <b>Detaching</b>: The initial state after calling <a>DeleteVirtualInterface</a> on a virtual interface that is attached to a direct connect gateway.</p> </li> <li> <p> <b>Detached</b>: The virtual interface is successfully detached from the direct connect gateway. Traffic flow between the direct connect gateway and virtual interface stops.</p> </li> </ul>",
      "enum":[
        "attaching",
        "attached",
        "detaching",
        "detached"
      ]
    },
    "DirectConnectGatewayId":{
      "type":"string",
      "documentation":"<p>The ID of the direct connect gateway.</p> <p>Example: \"abcd1234-dcba-5678-be23-cdef9876ab45\"</p>"
    },
    "DirectConnectGatewayList":{
      "type":"list",
      "member":{"shape":"DirectConnectGateway"},
      "documentation":"<p>A list of direct connect gateways.</p>"
    },
    "DirectConnectGatewayName":{
      "type":"string",
      "documentation":"<p>The name of the direct connect gateway.</p> <p>Example: \"My direct connect gateway\"</p> <p>Default: None</p>"
    },
    "DirectConnectGatewayState":{
      "type":"string",
      "documentation":"<p>State of the direct connect gateway.</p> <ul> <li> <p> <b>Pending</b>: The initial state after calling <a>CreateDirectConnectGateway</a>.</p> </li> <li> <p> <b>Available</b>: The direct connect gateway is ready for use.</p> </li> <li> <p> <b>Deleting</b>: The initial state after calling <a>DeleteDirectConnectGateway</a>.</p> </li> <li> <p> <b>Deleted</b>: The direct connect gateway is deleted and cannot pass traffic.</p> </li> </ul>",
      "enum":[
        "pending",
        "available",
        "deleting",
        "deleted"
      ]
    },
    "DirectConnectServerException":{
      "type":"structure",
      "members":{
        "message":{
          "shape":"ErrorMessage",
          "documentation":"<p>This is an exception thrown when there is a backend issue on the server side.</p>"
        }
      },
      "documentation":"<p>A server-side error occurred during the API call. The error message will contain additional details about the cause.</p>",
      "exception":true
    },
    "DisassociateConnectionFromLagRequest":{
      "type":"structure",
      "required":[
        "connectionId",
        "lagId"
      ],
      "members":{
        "connectionId":{
          "shape":"ConnectionId",
          "documentation":"<p>The ID of the connection to disassociate from the LAG.</p> <p>Example: dxcon-abc123</p> <p>Default: None</p>"
        },
        "lagId":{
          "shape":"LagId",
          "documentation":"<p>The ID of the LAG.</p> <p>Example: dxlag-abc123</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the DisassociateConnectionFromLag operation.</p>"
    },
    "DuplicateTagKeysException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>A tag key was specified more than once.</p>",
      "exception":true
    },
    "ErrorMessage":{"type":"string"},
    "Interconnect":{
      "type":"structure",
      "members":{
        "interconnectId":{"shape":"InterconnectId"},
        "interconnectName":{"shape":"InterconnectName"},
        "interconnectState":{"shape":"InterconnectState"},
        "region":{"shape":"Region"},
        "location":{"shape":"LocationCode"},
        "bandwidth":{"shape":"Bandwidth"},
        "loaIssueTime":{
          "shape":"LoaIssueTime",
          "documentation":"<p>The time of the most recent call to DescribeInterconnectLoa for this Interconnect.</p>"
        },
        "lagId":{"shape":"LagId"},
        "awsDevice":{
          "shape":"AwsDevice",
          "documentation":"<p>Deprecated in favor of awsDeviceV2.</p> <p>The Direct Connection endpoint which the physical connection terminates on.</p>"
        },
        "awsDeviceV2":{
          "shape":"AwsDeviceV2",
          "documentation":"<p>The Direct Connection endpoint which the physical connection terminates on.</p>"
        }
      },
      "documentation":"<p>An interconnect is a connection that can host other connections.</p> <p>Like a standard AWS Direct Connect connection, an interconnect represents the physical connection between an AWS Direct Connect partner's network and a specific Direct Connect location. An AWS Direct Connect partner who owns an interconnect can provision hosted connections on the interconnect for their end customers, thereby providing the end customers with connectivity to AWS services.</p> <p>The resources of the interconnect, including bandwidth and VLAN numbers, are shared by all of the hosted connections on the interconnect, and the owner of the interconnect determines how these resources are assigned.</p>"
    },
    "InterconnectId":{
      "type":"string",
      "documentation":"<p>The ID of the interconnect.</p> <p>Example: dxcon-abc123</p>"
    },
    "InterconnectList":{
      "type":"list",
      "member":{"shape":"Interconnect"},
      "documentation":"<p>A list of interconnects.</p>"
    },
    "InterconnectName":{
      "type":"string",
      "documentation":"<p>The name of the interconnect.</p> <p>Example: \"<i>1G Interconnect to AWS</i>\"</p>"
    },
    "InterconnectState":{
      "type":"string",
      "documentation":"<p>State of the interconnect.</p> <ul> <li> <p> <b>Requested</b>: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <b>Pending</b>: The interconnect has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is up, and the interconnect is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The interconnect is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The interconnect has been deleted.</p> </li> </ul>",
      "enum":[
        "requested",
        "pending",
        "available",
        "down",
        "deleting",
        "deleted"
      ]
    },
    "Interconnects":{
      "type":"structure",
      "members":{
        "interconnects":{
          "shape":"InterconnectList",
          "documentation":"<p>A list of interconnects.</p>"
        }
      },
      "documentation":"<p>A structure containing a list of interconnects.</p>"
    },
    "Lag":{
      "type":"structure",
      "members":{
        "connectionsBandwidth":{
          "shape":"Bandwidth",
          "documentation":"<p>The individual bandwidth of the physical connections bundled by the LAG.</p> <p>Available values: 1Gbps, 10Gbps</p>"
        },
        "numberOfConnections":{
          "shape":"Count",
          "documentation":"<p>The number of physical connections bundled by the LAG, up to a maximum of 10.</p>"
        },
        "lagId":{"shape":"LagId"},
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The owner of the LAG.</p>"
        },
        "lagName":{
          "shape":"LagName",
          "documentation":"<p>The name of the LAG.</p>"
        },
        "lagState":{"shape":"LagState"},
        "location":{"shape":"LocationCode"},
        "region":{"shape":"Region"},
        "minimumLinks":{
          "shape":"Count",
          "documentation":"<p>The minimum number of physical connections that must be operational for the LAG itself to be operational. If the number of operational connections drops below this setting, the LAG state changes to <code>down</code>. This value can help to ensure that a LAG is not overutilized if a significant number of its bundled connections go down.</p>"
        },
        "awsDevice":{
          "shape":"AwsDevice",
          "documentation":"<p>Deprecated in favor of awsDeviceV2.</p> <p>The AWS Direct Connection endpoint that hosts the LAG.</p>"
        },
        "awsDeviceV2":{
          "shape":"AwsDeviceV2",
          "documentation":"<p>The AWS Direct Connection endpoint that hosts the LAG.</p>"
        },
        "connections":{
          "shape":"ConnectionList",
          "documentation":"<p>A list of connections bundled by this LAG.</p>"
        },
        "allowsHostedConnections":{
          "shape":"BooleanFlag",
          "documentation":"<p>Indicates whether the LAG can host other connections.</p> <note> <p>This is intended for use by AWS Direct Connect partners only.</p> </note>"
        }
      },
      "documentation":"<p>Describes a link aggregation group (LAG). A LAG is a connection that uses the Link Aggregation Control Protocol (LACP) to logically aggregate a bundle of physical connections. Like an interconnect, it can host other connections. All connections in a LAG must terminate on the same physical AWS Direct Connect endpoint, and must be the same bandwidth.</p>"
    },
    "LagId":{
      "type":"string",
      "documentation":"<p>The ID of the LAG.</p> <p>Example: dxlag-fg5678gh</p>"
    },
    "LagList":{
      "type":"list",
      "member":{"shape":"Lag"},
      "documentation":"<p>A list of LAGs.</p>"
    },
    "LagName":{"type":"string"},
    "LagState":{
      "type":"string",
      "documentation":"<p>The state of the LAG.</p> <ul> <li> <p> <b>Requested</b>: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.</p> </li> <li> <p> <b>Pending</b>: The LAG has been approved, and is being initialized.</p> </li> <li> <p> <b>Available</b>: The network link is established, and the LAG is ready for use.</p> </li> <li> <p> <b>Down</b>: The network link is down.</p> </li> <li> <p> <b>Deleting</b>: The LAG is in the process of being deleted.</p> </li> <li> <p> <b>Deleted</b>: The LAG has been deleted.</p> </li> </ul>",
      "enum":[
        "requested",
        "pending",
        "available",
        "down",
        "deleting",
        "deleted"
      ]
    },
    "Lags":{
      "type":"structure",
      "members":{
        "lags":{
          "shape":"LagList",
          "documentation":"<p>A list of LAGs.</p>"
        }
      },
      "documentation":"<p>A structure containing a list of LAGs.</p>"
    },
    "Loa":{
      "type":"structure",
      "members":{
        "loaContent":{"shape":"LoaContent"},
        "loaContentType":{"shape":"LoaContentType"}
      },
      "documentation":"<p>A structure containing the Letter of Authorization - Connecting Facility Assignment (LOA-CFA) for a connection.</p>"
    },
    "LoaContent":{
      "type":"blob",
      "documentation":"<p>The binary contents of the LOA-CFA document.</p>"
    },
    "LoaContentType":{
      "type":"string",
      "documentation":"<p>A standard media type indicating the content type of the LOA-CFA document. Currently, the only supported value is \"application/pdf\".</p> <p>Default: application/pdf</p>",
      "enum":["application/pdf"]
    },
    "LoaIssueTime":{"type":"timestamp"},
    "Location":{
      "type":"structure",
      "members":{
        "locationCode":{
          "shape":"LocationCode",
          "documentation":"<p>The code used to indicate the AWS Direct Connect location.</p>"
        },
        "locationName":{
          "shape":"LocationName",
          "documentation":"<p>The name of the AWS Direct Connect location. The name includes the colocation partner name and the physical site of the lit building.</p>"
        },
        "region":{
          "shape":"Region",
          "documentation":"<p>The AWS region where the AWS Direct connect location is located.</p> <p>Example: us-east-1</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>An AWS Direct Connect location where connections and interconnects can be requested.</p>"
    },
    "LocationCode":{
      "type":"string",
      "documentation":"<p>Where the connection is located.</p> <p>Example: EqSV5</p> <p>Default: None</p>"
    },
    "LocationList":{
      "type":"list",
      "member":{"shape":"Location"}
    },
    "LocationName":{"type":"string"},
    "Locations":{
      "type":"structure",
      "members":{
        "locations":{
          "shape":"LocationList",
          "documentation":"<p>A list of colocation hubs where network providers have equipment. Most regions have multiple locations available.</p>"
        }
      },
      "documentation":"<p>A location is a network facility where AWS Direct Connect routers are available to be connected. Generally, these are colocation hubs where many network providers have equipment, and where cross connects can be delivered. Locations include a name and facility code, and must be provided when creating a connection.</p>"
    },
    "LongAsn":{"type":"long"},
    "MaxResultSetSize":{
      "type":"integer",
      "documentation":"<p>Maximum number of objects to return per page.</p>",
      "box":true
    },
    "NewBGPPeer":{
      "type":"structure",
      "members":{
        "asn":{"shape":"ASN"},
        "authKey":{"shape":"BGPAuthKey"},
        "addressFamily":{"shape":"AddressFamily"},
        "amazonAddress":{"shape":"AmazonAddress"},
        "customerAddress":{"shape":"CustomerAddress"}
      },
      "documentation":"<p>A structure containing information about a new BGP peer.</p>"
    },
    "NewPrivateVirtualInterface":{
      "type":"structure",
      "required":[
        "virtualInterfaceName",
        "vlan",
        "asn"
      ],
      "members":{
        "virtualInterfaceName":{"shape":"VirtualInterfaceName"},
        "vlan":{"shape":"VLAN"},
        "asn":{"shape":"ASN"},
        "authKey":{"shape":"BGPAuthKey"},
        "amazonAddress":{"shape":"AmazonAddress"},
        "customerAddress":{"shape":"CustomerAddress"},
        "addressFamily":{"shape":"AddressFamily"},
        "virtualGatewayId":{"shape":"VirtualGatewayId"},
        "directConnectGatewayId":{"shape":"DirectConnectGatewayId"}
      },
      "documentation":"<p>A structure containing information about a new private virtual interface.</p>"
    },
    "NewPrivateVirtualInterfaceAllocation":{
      "type":"structure",
      "required":[
        "virtualInterfaceName",
        "vlan",
        "asn"
      ],
      "members":{
        "virtualInterfaceName":{"shape":"VirtualInterfaceName"},
        "vlan":{"shape":"VLAN"},
        "asn":{"shape":"ASN"},
        "authKey":{"shape":"BGPAuthKey"},
        "amazonAddress":{"shape":"AmazonAddress"},
        "addressFamily":{"shape":"AddressFamily"},
        "customerAddress":{"shape":"CustomerAddress"}
      },
      "documentation":"<p>A structure containing information about a private virtual interface that will be provisioned on a connection.</p>"
    },
    "NewPublicVirtualInterface":{
      "type":"structure",
      "required":[
        "virtualInterfaceName",
        "vlan",
        "asn"
      ],
      "members":{
        "virtualInterfaceName":{"shape":"VirtualInterfaceName"},
        "vlan":{"shape":"VLAN"},
        "asn":{"shape":"ASN"},
        "authKey":{"shape":"BGPAuthKey"},
        "amazonAddress":{"shape":"AmazonAddress"},
        "customerAddress":{"shape":"CustomerAddress"},
        "addressFamily":{"shape":"AddressFamily"},
        "routeFilterPrefixes":{"shape":"RouteFilterPrefixList"}
      },
      "documentation":"<p>A structure containing information about a new public virtual interface.</p>"
    },
    "NewPublicVirtualInterfaceAllocation":{
      "type":"structure",
      "required":[
        "virtualInterfaceName",
        "vlan",
        "asn"
      ],
      "members":{
        "virtualInterfaceName":{"shape":"VirtualInterfaceName"},
        "vlan":{"shape":"VLAN"},
        "asn":{"shape":"ASN"},
        "authKey":{"shape":"BGPAuthKey"},
        "amazonAddress":{"shape":"AmazonAddress"},
        "customerAddress":{"shape":"CustomerAddress"},
        "addressFamily":{"shape":"AddressFamily"},
        "routeFilterPrefixes":{"shape":"RouteFilterPrefixList"}
      },
      "documentation":"<p>A structure containing information about a public virtual interface that will be provisioned on a connection.</p>"
    },
    "OwnerAccount":{"type":"string"},
    "PaginationToken":{
      "type":"string",
      "documentation":"<p>Token to retrieve the next page of the result.</p>"
    },
    "PartnerName":{"type":"string"},
    "ProviderName":{"type":"string"},
    "Region":{
      "type":"string",
      "documentation":"<p>The AWS region where the connection is located.</p> <p>Example: us-east-1</p> <p>Default: None</p>"
    },
    "ResourceArn":{"type":"string"},
    "ResourceArnList":{
      "type":"list",
      "member":{"shape":"ResourceArn"}
    },
    "ResourceTag":{
      "type":"structure",
      "members":{
        "resourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Direct Connect resource.</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The tags.</p>"
        }
      },
      "documentation":"<p>The tags associated with a Direct Connect resource.</p>"
    },
    "ResourceTagList":{
      "type":"list",
      "member":{"shape":"ResourceTag"}
    },
    "RouteFilterPrefix":{
      "type":"structure",
      "members":{
        "cidr":{
          "shape":"CIDR",
          "documentation":"<p>CIDR notation for the advertised route. Multiple routes are separated by commas.</p> <p>IPv6 CIDRs must be at least a /64 or shorter</p> <p>Example: 10.10.10.0/24,10.10.11.0/24,2001:db8::/64</p>"
        }
      },
      "documentation":"<p>A route filter prefix that the customer can advertise through Border Gateway Protocol (BGP) over a public virtual interface.</p>"
    },
    "RouteFilterPrefixList":{
      "type":"list",
      "member":{"shape":"RouteFilterPrefix"},
      "documentation":"<p>A list of routes to be advertised to the AWS network in this region (public virtual interface).</p>"
    },
    "RouterConfig":{"type":"string"},
    "StateChangeError":{
      "type":"string",
      "documentation":"<p>Error message when the state of an object fails to advance.</p>"
    },
    "Tag":{
      "type":"structure",
      "required":["key"],
      "members":{
        "key":{
          "shape":"TagKey",
          "documentation":"<p>The key of the tag.</p>"
        },
        "value":{
          "shape":"TagValue",
          "documentation":"<p>The value of the tag.</p>"
        }
      },
      "documentation":"<p>Information about a tag.</p>"
    },
    "TagKey":{
      "type":"string",
      "max":128,
      "min":1,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TagKeyList":{
      "type":"list",
      "member":{"shape":"TagKey"}
    },
    "TagList":{
      "type":"list",
      "member":{"shape":"Tag"},
      "min":1
    },
    "TagResourceRequest":{
      "type":"structure",
      "required":[
        "resourceArn",
        "tags"
      ],
      "members":{
        "resourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Direct Connect resource.</p> <p>Example: arn:aws:directconnect:us-east-1:123456789012:dxcon/dxcon-fg5678gh</p>"
        },
        "tags":{
          "shape":"TagList",
          "documentation":"<p>The list of tags to add.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the TagResource operation.</p>"
    },
    "TagResourceResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The response received when TagResource is called.</p>"
    },
    "TagValue":{
      "type":"string",
      "max":256,
      "min":0,
      "pattern":"^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$"
    },
    "TooManyTagsException":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>You have reached the limit on the number of tags that can be assigned to a Direct Connect resource.</p>",
      "exception":true
    },
    "UntagResourceRequest":{
      "type":"structure",
      "required":[
        "resourceArn",
        "tagKeys"
      ],
      "members":{
        "resourceArn":{
          "shape":"ResourceArn",
          "documentation":"<p>The Amazon Resource Name (ARN) of the Direct Connect resource.</p>"
        },
        "tagKeys":{
          "shape":"TagKeyList",
          "documentation":"<p>The list of tag keys to remove.</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the UntagResource operation.</p>"
    },
    "UntagResourceResponse":{
      "type":"structure",
      "members":{
      },
      "documentation":"<p>The response received when UntagResource is called.</p>"
    },
    "UpdateLagRequest":{
      "type":"structure",
      "required":["lagId"],
      "members":{
        "lagId":{
          "shape":"LagId",
          "documentation":"<p>The ID of the LAG to update.</p> <p>Example: dxlag-abc123</p> <p>Default: None</p>"
        },
        "lagName":{
          "shape":"LagName",
          "documentation":"<p>The name for the LAG.</p> <p>Example: \"<code>3x10G LAG to AWS</code>\"</p> <p>Default: None</p>"
        },
        "minimumLinks":{
          "shape":"Count",
          "documentation":"<p>The minimum number of physical connections that must be operational for the LAG itself to be operational.</p> <p>Default: None</p>"
        }
      },
      "documentation":"<p>Container for the parameters to the UpdateLag operation.</p>"
    },
    "VLAN":{
      "type":"integer",
      "documentation":"<p>The VLAN ID.</p> <p>Example: 101</p>"
    },
    "VirtualGateway":{
      "type":"structure",
      "members":{
        "virtualGatewayId":{"shape":"VirtualGatewayId"},
        "virtualGatewayState":{"shape":"VirtualGatewayState"}
      },
      "documentation":"<p>You can create one or more AWS Direct Connect private virtual interfaces linking to your virtual private gateway.</p> <p>Virtual private gateways can be managed using the Amazon Virtual Private Cloud (Amazon VPC) console or the <a href=\"http://docs.aws.amazon.com/AWSEC2/latest/APIReference/ApiReference-query-CreateVpnGateway.html\">Amazon EC2 CreateVpnGateway action</a>.</p>"
    },
    "VirtualGatewayId":{
      "type":"string",
      "documentation":"<p>The ID of the virtual private gateway to a VPC. This only applies to private virtual interfaces.</p> <p>Example: vgw-123er56</p>"
    },
    "VirtualGatewayList":{
      "type":"list",
      "member":{"shape":"VirtualGateway"},
      "documentation":"<p>A list of virtual private gateways.</p>"
    },
    "VirtualGatewayRegion":{
      "type":"string",
      "documentation":"<p>The region in which the virtual private gateway is located.</p> <p>Example: us-east-1</p>"
    },
    "VirtualGatewayState":{
      "type":"string",
      "documentation":"<p>State of the virtual private gateway.</p> <ul> <li> <p> <b>Pending</b>: This is the initial state after calling <i>CreateVpnGateway</i>.</p> </li> <li> <p> <b>Available</b>: Ready for use by a private virtual interface.</p> </li> <li> <p> <b>Deleting</b>: This is the initial state after calling <i>DeleteVpnGateway</i>.</p> </li> <li> <p> <b>Deleted</b>: In this state, a private virtual interface is unable to send traffic over this gateway.</p> </li> </ul>"
    },
    "VirtualGateways":{
      "type":"structure",
      "members":{
        "virtualGateways":{
          "shape":"VirtualGatewayList",
          "documentation":"<p>A list of virtual private gateways.</p>"
        }
      },
      "documentation":"<p>A structure containing a list of virtual private gateways.</p>"
    },
    "VirtualInterface":{
      "type":"structure",
      "members":{
        "ownerAccount":{
          "shape":"OwnerAccount",
          "documentation":"<p>The AWS account that will own the new virtual interface.</p>"
        },
        "virtualInterfaceId":{"shape":"VirtualInterfaceId"},
        "location":{"shape":"LocationCode"},
        "connectionId":{"shape":"ConnectionId"},
        "virtualInterfaceType":{"shape":"VirtualInterfaceType"},
        "virtualInterfaceName":{"shape":"VirtualInterfaceName"},
        "vlan":{"shape":"VLAN"},
        "asn":{"shape":"ASN"},
        "amazonSideAsn":{
          "shape":"LongAsn",
          "documentation":"<p>The autonomous system number (ASN) for the Amazon side of the connection.</p>"
        },
        "authKey":{"shape":"BGPAuthKey"},
        "amazonAddress":{"shape":"AmazonAddress"},
        "customerAddress":{"shape":"CustomerAddress"},
        "addressFamily":{"shape":"AddressFamily"},
        "virtualInterfaceState":{"shape":"VirtualInterfaceState"},
        "customerRouterConfig":{
          "shape":"RouterConfig",
          "documentation":"<p>Information for generating the customer router configuration.</p>"
        },
        "virtualGatewayId":{"shape":"VirtualGatewayId"},
        "directConnectGatewayId":{"shape":"DirectConnectGatewayId"},
        "routeFilterPrefixes":{"shape":"RouteFilterPrefixList"},
        "bgpPeers":{"shape":"BGPPeerList"},
        "region":{
          "shape":"Region",
          "documentation":"<p>The AWS region where the virtual interface is located.</p> <p>Example: us-east-1</p> <p>Default: None</p>"
        },
        "awsDeviceV2":{
          "shape":"AwsDeviceV2",
          "documentation":"<p>The Direct Connection endpoint which the virtual interface terminates on.</p>"
        }
      },
      "documentation":"<p>A virtual interface (VLAN) transmits the traffic between the AWS Direct Connect location and the customer.</p>"
    },
    "VirtualInterfaceId":{
      "type":"string",
      "documentation":"<p>The ID of the virtual interface.</p> <p>Example: dxvif-123dfg56</p> <p>Default: None</p>"
    },
    "VirtualInterfaceList":{
      "type":"list",
      "member":{"shape":"VirtualInterface"},
      "documentation":"<p>A list of virtual interfaces.</p>"
    },
    "VirtualInterfaceName":{
      "type":"string",
      "documentation":"<p>The name of the virtual interface assigned by the customer.</p> <p>Example: \"My VPC\"</p>"
    },
    "VirtualInterfaceRegion":{
      "type":"string",
      "documentation":"<p>The region in which the virtual interface is located.</p> <p>Example: us-east-1</p>"
    },
    "VirtualInterfaceState":{
      "type":"string",
      "documentation":"<p>State of the virtual interface.</p> <ul> <li> <p> <b>Confirming</b>: The creation of the virtual interface is pending confirmation from the virtual interface owner. If the owner of the virtual interface is different from the owner of the connection on which it is provisioned, then the virtual interface will remain in this state until it is confirmed by the virtual interface owner.</p> </li> <li> <p> <b>Verifying</b>: This state only applies to public virtual interfaces. Each public virtual interface needs validation before the virtual interface can be created.</p> </li> <li> <p> <b>Pending</b>: A virtual interface is in this state from the time that it is created until the virtual interface is ready to forward traffic.</p> </li> <li> <p> <b>Available</b>: A virtual interface that is able to forward traffic.</p> </li> <li> <p> <b>Down</b>: A virtual interface that is BGP down.</p> </li> <li> <p> <b>Deleting</b>: A virtual interface is in this state immediately after calling <a>DeleteVirtualInterface</a> until it can no longer forward traffic.</p> </li> <li> <p> <b>Deleted</b>: A virtual interface that cannot forward traffic.</p> </li> <li> <p> <b>Rejected</b>: The virtual interface owner has declined creation of the virtual interface. If a virtual interface in the 'Confirming' state is deleted by the virtual interface owner, the virtual interface will enter the 'Rejected' state.</p> </li> </ul>",
      "enum":[
        "confirming",
        "verifying",
        "pending",
        "available",
        "down",
        "deleting",
        "deleted",
        "rejected"
      ]
    },
    "VirtualInterfaceType":{
      "type":"string",
      "documentation":"<p>The type of virtual interface.</p> <p>Example: private (Amazon VPC) or public (Amazon S3, Amazon DynamoDB, and so on.)</p>"
    },
    "VirtualInterfaces":{
      "type":"structure",
      "members":{
        "virtualInterfaces":{
          "shape":"VirtualInterfaceList",
          "documentation":"<p>A list of virtual interfaces.</p>"
        }
      },
      "documentation":"<p>A structure containing a list of virtual interfaces.</p>"
    }
  },
  "documentation":"<p>AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an AWS Direct Connect router. With this connection in place, you can create virtual interfaces directly to the AWS cloud (for example, to Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Simple Storage Service (Amazon S3)) and to Amazon Virtual Private Cloud (Amazon VPC), bypassing Internet service providers in your network path. An AWS Direct Connect location provides access to AWS in the region it is associated with, as well as access to other US regions. For example, you can provision a single connection to any AWS Direct Connect location in the US and use it to access public AWS services in all US Regions and AWS GovCloud (US).</p>"
}
