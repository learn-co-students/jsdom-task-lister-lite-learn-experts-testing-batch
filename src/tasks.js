let counterID = 0;

class TaskItem {
  constructor(description) {
    this.description = description
    this.id = counterID++
  }

  render() {
    return `
      <li data-id=${this.id}>
        ${this.description}
        <button>X</button>
      </li>
    `
  }
}