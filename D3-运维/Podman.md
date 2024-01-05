### 1.Podman

`Podman`（Pod Manager）是一个开源项目，用于构建、管理和运行容器和容器镜像。它是 Docker 的一个替代品，提供了几乎相同的功能，但是有一些关键的区别。Podman 的主要特点包括：

1. **无守护进程**：Podman 不需要运行一个守护进程（如 Docker 的 `dockerd`），这意味着它以一个无守护进程的方式运行容器。这样做的好处是提高了安全性，因为不需要以 root 权限运行一个长期运行的守护进程。
2. **兼容 Docker**：Podman 的命令行界面（CLI）设计为与 Docker CLI 兼容，这意味着大多数情况下，你可以直接将 `docker` 命令替换为 `podman` 命令。
3. **Rootless**：Podman 允许非 root 用户运行容器，这进一步增强了系统的安全性。
4. **Pods**：Podman 引入了“Pod”的概念，这是一组共享相同的网络命名空间、IPC 命名空间和其他资源的容器。这与 Kubernetes 中的 Pod 类似。
5. **OCI 兼容**：Podman 完全兼容开放容器倡议（OCI）标准，这意味着它可以运行任何符合 OCI 标准的容器镜像。
6. **系统服务**：Podman 提供了 `podman system service` 命令，它可以启动一个 RESTful API 服务器，允许远程客户端通过 HTTP API 与 Podman 交互，类似于 Docker 的方式。
7. **构建工具**：Podman 集成了 `Buildah` 和 `Skopeo`，这两个工具分别用于构建容器镜像和在不同镜像仓库之间复制、查找和管理镜像。