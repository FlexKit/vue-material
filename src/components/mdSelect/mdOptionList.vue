<script>
  const renderChildren = (node, createElement, context) => {
    const { data, componentOptions } = node;

    if (!componentOptions || componentOptions.tag !== 'md-option') {
      if (node.children) {
        node.children = node.children.map((node) => renderChildren(node, createElement, context));
      }

      return node;
    }

    const { children, listeners, propsData } = componentOptions;

    return createElement(
      'md-option',
      {
        ...data,
        props: {
          ...propsData,
          multiple: context.parent.multiple,
          selected: context.parent.checkSelected(propsData.value)
        },
        on: {
          ...listeners,
          selected(value, isSelected, $event) {
            if (listeners && listeners.selected) {
              listeners.selected(value, isSelected);
            }

            context.parent.changeValue(value, isSelected, $event);
          },
          updateText: context.parent.updateSelectedText
        }
      },
      children
    );
  };


  export default {
    functional: true,
    render(createElement, context) {
      return createElement(
        'md-menu-content',
        context.data,
        context.children.map((node) => renderChildren(node, createElement, context))
      );
    }
  };
</script>
