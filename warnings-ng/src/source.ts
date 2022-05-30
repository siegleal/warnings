export class Source {
  static ACTIVE = new Source('Active Alerts', 'active')
  static PAST_TOR = new Source('Past Tornadoes', 'tornadoes')
  static FILE = new Source('File', 'file')
  static findSource(sourceValue: string) {
    switch (sourceValue) {
      case this.ACTIVE.value:
        return this.ACTIVE
      case this.PAST_TOR.value:
        return this.PAST_TOR
      case this.FILE.value:
        return this.FILE
      default:
        return new Source('','')
    }
  }

  name: string
  value: string

  private constructor(name: string, value: string) {
    this.name = name
    this.value = value
  }
}