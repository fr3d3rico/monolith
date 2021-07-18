# Monolith to Microservice: Udagram Application

- Link to access Udagram App Deployed:
    http://aa5ae191e83cc431e876e619f9e2dda8-1561292010.us-east-1.elb.amazonaws.com:8100

- DockerHub

    ![DockerHub](https://github.com/fr3d3rico/monolith/blob/master/screenshots/docker-hub-fr3d3rico.JPG)
    
    
- Travis CI  
    ![Travis Status](https://github.com/fr3d3rico/monolith/blob/master/screenshots/travis-log-1.JPG)
    ![Travis Status](https://github.com/fr3d3rico/monolith/blob/master/screenshots/travis-log-2.JPG)



- Kubectl

    - kubectl get information
    ![Kubectl](https://github.com/fr3d3rico/monolith/blob/master/screenshots/kubectl-gets.JPG)

    - kubectl Activity POD log
    ![Kubectl](https://github.com/fr3d3rico/monolith/blob/master/screenshots/kubectls-logs-pod-backend-user.JPG)
    
    - kubectl describe Reverse Proxy
    ![Kubectl](https://github.com/fr3d3rico/monolith/blob/master/screenshots/kubectl-describe-service-reverse-proxy.JPG)

- HPA

    I faced some issues with HPA. I had to install server to get metrics from kubernates. (https://aws.amazon.com/premiumsupport/knowledge-center/eks-metrics-server-pod-autoscaler/?nc1=h_ls)

    - kubectl describe HPA
    ![HPA](https://github.com/fr3d3rico/monolith/blob/master/screenshots/kubectl-describe-hpa.JPG)


