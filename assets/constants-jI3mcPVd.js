const e="Assigning a Linode to a subnet requires you to reboot the Linode to update its configuration.",t="Select the Linodes you would like to assign to this subnet. Only Linodes in this VPC's region are displayed.",n="This Linode has multiple configurations. Select which configuration you would like added to the subnet.",o="Assigned or unassigned Linodes will not take affect until the Linodes are rebooted.",s="Unassigning Linodes from a subnet requires you to reboot the Linodes to update its configuration.",i="Virtual Private Cloud (VPC)",a="Automatically assign an IPv4 address as the private IP address for this Linode in the VPC.",c="You don't have permissions to create a new VPC. Please contact an account administrator for details",r="Each VPC can further segment itself into distinct networks through the use of multiple subnets. These subnets can isolate various functionality of an application.",d="A VPC is an isolated network that enables private communication between Compute Instances within the same data center.",E="https://docs.google.com/forms/d/e/1FAIpQLScvWbTupCNsBF5cz5YEsv5oErHM4ONBZodDYi8KuOgC8fyfag/viewform",h="The VPC configuration has been updated. Reboot the Linode to reflect configuration changes.",u="https://www.linode.com/docs/products/compute/compute-instances/guides/configuration-profiles/",_="warning-icon-for-unrecommended-config",l="This network configuration is not recommended. The Linode will not be reachable or able to reach Linodes in the other subnets of the VPC. We recommend selecting VPC as the primary interface and checking the “Assign a public IPv4 address for this Linode” checkbox.",T="This network configuration is not recommended. The Linode will have no public connectivity as the public IPv4 is assigned to the non-primary VPC interface. We recommend selecting VPC as the primary interface.",L="The Linode will not be able to access the internet. If this Linode needs access to the internet, we recommend checking the “Assign a public IPv4 address for this Linode” checkbox which will enable 1:1 NAT on the VPC interface.";export{e as A,c as C,l as L,n as M,u as N,t as R,s as S,h as V,_ as W,a,r as b,d as c,i as d,E as e,o as f,T as g,L as h};