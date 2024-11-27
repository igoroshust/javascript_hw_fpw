import React from "react";
import renderer, { act } from "react-test-renderer";
import Link1 from "../src/components/Link1/Link1";

test("Link changes the class when hovered", () => {
    const component = renderer.create(
        <Link1 page="https://skillfactory.ru/">Skill Factory</Link1>
    ); // renderer.create() рендерит компоненты и HTML-элементы в тестовой среде для дальнешего управления ими

    let tree = component.toJSON(); // отрендеренный компонент в JSON-формате
    console.log(tree);
    expect(tree).toMatchSnapshot(); // тестирование компонента: сравнение его со свежим скриншотом

    // manually trigger the callback
    // act используется для оборачивания вызовов обработчиков событий
    act(() => {
       tree.props.onMouseEnter(); // изменение состояния компонента
    });
    // re-rendering
    tree = component.toJSON(); // перерендеринг (обнуляем состояние компонента до изначального)
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    act(() => {
       tree.props.onMouseLeave(); // изменение состояния компонента
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});