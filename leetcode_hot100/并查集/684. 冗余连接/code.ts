//给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，
//且这条附加的边不属于树中已存在的边。图的信息记录于长度为 n 的二维数组 edges ，
//edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。
//请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。
//如果有多个答案，则返回数组 edges 中最后出现的那个。

//思路：并查集
function findRedundantConnection(edges: number[][]): number[] {
  const parent = Array.from({ length: edges.length + 1 }, (_, index) => index);

  // 查找节点的根节点，并进行路径压缩
  function find(x: number): number {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]); // 路径压缩
    }
    return parent[x];
  }

  // 合并两个节点的集合
  function union(x: number, y: number): boolean {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) {
      return false; // 如果两个节点的根节点相同，说明形成环
    }
    parent[rootX] = rootY; // 合并两个集合
    return true;
  }

  for (let edge of edges) {
    let node1: number = edge[0];
    let node2: number = edge[1];
    if (find(node1) == find(node2)) {
      return edge;
    } else {
      union(node1, node2);
    }
  }
  return [];
}
