import { useEffect, useState, useRef } from "react";
import Link from 'next/link'

import { List, Icon, Divider, Accordion, Menu, Form } from "semantic-ui-react";

import TreeMenu from 'react-simple-tree-menu'
import 'react-simple-tree-menu/dist/main.css';

const SideMenu = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  const treeData = [
    {
      key: '메뉴명1',
      label: '메뉴명1',
      url: '',
      nodes: [
        {
          key: '메뉴명1-1',
          label: '메뉴명1-1',
          url: ''
        },
        {
          key: '메뉴명1-2',
          label: '메뉴명1-2',
          url: ''
        },
      ]
    },
    {
      key: '메뉴명2',
      label: '메뉴명2',
      url: '',
      nodes: [
        {
          key: '메뉴명2-1',
          label: '메뉴명2-1',
          url: ''
        },
        {
          key: '메뉴명2-2',
          label: '메뉴명2-2',
          url: ''
        },
      ]
    },
    {
      key: '메뉴명3',
      label: '메뉴명3',
      url: '',
      nodes: [
        {
          key: '메뉴명3-1',
          label: '메뉴명3-1',
          url: ''
        },
        {
          key: '메뉴명3-2',
          label: '메뉴명3-2',
          url: ''
        },
      ]
    },

  ]



  return (
    <>
      <TreeMenu
        cacheSearch
        data={treeData}
        debounceTime={125}
        disableKeyboard={true}
        hasSearch={true}
        onClickItem={function noRefCheck() { }}
        resetOpenNodesOnDataUpdate={false}
      />
    </>
  );
};

export default SideMenu;