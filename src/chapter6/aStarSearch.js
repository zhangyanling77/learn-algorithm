/** 
 * 算法的实际应用
 * 
 * A星寻路算法  迷宫寻路，最短有效路径
*/

Array.prototype.indexOf = function(val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function(val) {
  let index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

// 迷宫地图
const MAZE = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

class Grid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.parent = null;
  }
  initGrid(parent, end) {
    this.parent = parent;
    if (parent != null) {
      this.g = parent.g + 1;
    } else {
      this.g = 1;
    }
    this.h = Math.abs(this.x - end.x) + Math.abs(this.y - end.y);
    this.f = this.g + this.h;
  }
}

// A*寻路主逻辑
function aStartSearch(start, end) {
  let openList = [];
  let closeList = [];
  // 把起点加入到openList
  openList.push(start);
  // 主循环，每一轮检查1个当前格子节点
  while (openList.length > 0) {
    // 在openList中查找F值最小的节点，将其作为当前格子节点
    let currentGrid = findMinGrid(openList);
    // 将当前格子节点从openList中移除
    openList.remove(currentGrid);
    // 当前格子节点进入closeList
    closeList.push(currentGrid);
    // 找到所有邻近节点
    let neighbors = findNeighbors(currentGrid, openList, closeList);
    for (let grid of neighbors) {
      if (!openList.includes(grid)) {
        // 邻近节点不在openList中，标记父节点、G、H、F，并放入openList
        grid.initGrid(currentGrid, end);
        openList.push(grid)
      }
    }
    // 如果终点在openList中，直接返回终点格子
    for (let grid of openList) {
      if ((grid.x == end.x) && (grid.y == end.y)) {
        return grid
      }
    }
  }
  // openList用尽仍找不到终点，说明终点不可到达，返回空
  return null;
}
// 找到F值最小的格子
function findMinGrid(openList) {
  let tempGrid = openList[0];
  for (let grid of openList) {
    if (grid.f < tempGrid.f) {
      tempGrid = grid
    }
  }
  return tempGrid
}

function findNeighbors(grid, openList, closeList) {
  let gridList = [];
  // 当前格子的上面一个格子
  if (isValidGrid(grid.x, grid.y-1, openList, closeList)) {
    gridList.push(new Grid(grid.x, grid.y-1))
  }
  // 当前格子的下面一个格子
  if (isValidGrid(grid.x, grid.y+1, openList, closeList)) {
    gridList.push(new Grid(grid.x, grid.y+1))
  }
  // 当前格子的左边一个格子
  if (isValidGrid(grid.x-1, grid.y, openList, closeList)) {
    gridList.push(new Grid(grid.x-1, grid.y))
  }
  // 当前格子的右边一个格子
  if (isValidGrid(grid.x+1, grid.y, openList, closeList)) {
    gridList.push(new Grid(grid.x+1, grid.y))
  }
  return gridList;
}

function isValidGrid(x, y, openList, closeList) {
  // 是否越界
  if (x < 0 || x >= MAZE.length || y < 0 || y >= MAZE[0].length) {
    return false;
  }
  // 是否有障碍物
  if (MAZE[x][y] == 1) {
    return false;
  }
  // 是否已经在openList中
  if (containGrid(openList, x, y)) {
    return false;
  }
  // 是否已经在closeList中
  if (containGrid(closeList, x, y)) {
    return false;
  }
  return true;
}
// 是否包含节点
function containGrid(grids, x, y) {
  for (let grid of grids) {
    if ((grid.x == x) && (grid.y == y)) {
      return true
    }
  }
  return false;
}

// 设置起点和终点
let startGrid = new Grid(2, 1);
let endGrid = new Grid(2, 5);
// 搜索迷宫终点
let resultGrid = aStartSearch(startGrid, endGrid);
// 回溯迷宫路径
let path = [];
while(resultGrid != null) {
  path.push(new Grid(resultGrid.x, resultGrid.y));
  resultGrid = resultGrid.parent;
}
// 输出迷宫和路径，路径用 * 表示
let pathMap = '';
for (let i = 0; i < MAZE.length; i++) {
  for (let j = 0; j < MAZE[0].length; j++) {
    if (containGrid(path, i, j)) {
      pathMap += '*, ';
    } else {
      pathMap += `${MAZE[i][j]}, `;
    }
  }
  pathMap += '\n';
}
console.log(pathMap)
/** 最终路径
0, 0, *, *, *, *, 0
0, 0, *, 1, 0, *, 0
0, *, *, 1, 0, *, 0
0, 0, 0, 1, 0, 0, 0
0, 0, 0, 0, 0, 0, 0
*/
