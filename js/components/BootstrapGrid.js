const ruleKeys = [
  'xs',
  'sm',
  'md',
  'lg'
];

class BootstrapGrid {
  /**
   * @param {object} rules should be something like
   * { xs: '  ********  ' } which means with 8 for xs
   */
  constructor(rules) {
    this.classNames = this.getClassNamesByRules(rules);
  }

  getClassNamesByRules(rules) {
    const filterKeysByRules = this.filterKeysByRules.bind(this, rules);
    const getClassNamesByRule = this.getClassNamesByRule.bind(this, rules);
    const classNames = ruleKeys.filter(filterKeysByRules).map(getClassNamesByRule);
    return classNames;
  }

  filterKeysByRules(rules, key) {
    let has = rules.hasOwnProperty(key);
    return has;
  }

  getClassNamesByRule(rules, key) {
    let className;
    let rule = rules[key] || '';
    rule = rule.replace(/[^\*]/g, '');
    className = `col-${key}-${rule.length}`;
    return className;
  }
}

export default BootstrapGrid;