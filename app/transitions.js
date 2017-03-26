const TABS = [['index', 'schedule'], ['index', 'speakers'], ['schedule', 'speakers']];

export default function () {
  TABS.forEach(([a, b]) => {
    this.transition(
      this.fromRoute(a),
      this.toRoute(b),
      this.use('toLeft', {duration: 100}),
      this.reverse('toRight', {duration: 100})
    );
  });
}