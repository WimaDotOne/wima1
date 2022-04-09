import Head from "next/head";
import { useState } from "react";
import { AppleWindow, BottomBarDiv, color, GroupModel, ItemModel, Landing, MenuModel } from "../fAppleWindow";

export function AppleWindowDemo() {

  const [viewId, setViewId] = useState<string>("1")
  const [isLeftBarOpen, setIsLeftBarOpen] = useState<boolean>(false)
  const menu = AppleNewsMenu(viewId)

  return(<>
    <Head>
      <title>Apple Window</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
    <AppleWindow menu={menu} brand="Wima" 
      isLeftBarOpen={isLeftBarOpen} setIsLeftBarOpen={setIsLeftBarOpen}
      viewId={viewId} setViewId={setViewId}>
      <Landing />
    </AppleWindow>
    <BottomBarDiv isLeftBarOpen={isLeftBarOpen}>
    </BottomBarDiv>

  </>)
}

export function AppleNewsMenu(viewId: string): MenuModel {
  const group1 = new GroupModel("Apple News", false)
  group1.AddItem(new ItemModel("1", "Today", "applenews"))
  group1.AddItem(new ItemModel("2", "News+"))
  group1.AddItem(new ItemModel("3", "Shared with You"))
  group1.AddItem(new ItemModel("4", "Saved Stories"))
  group1.AddItem(new ItemModel("5", "History"))
  const group2 = new GroupModel("Special Coverage", true)
  group2.AddItem(new ItemModel("6", "COVID-19"))
  const group3 = new GroupModel("Special Coverage", true)
  group3.AddItem(new ItemModel("7", "Apple News Spotlight"))
  const group4 = new GroupModel("Suggested by Siri", true)
  group4.AddItem(new ItemModel("8", "The Wall Street Journal"))
  group4.AddItem(new ItemModel("9", "Business"))
  group4.AddItem(new ItemModel("10", "Coromenuirus"))
  group4.AddItem(new ItemModel("11", "Consumer Electronics"))
  group4.AddItem(new ItemModel("12", "Apple"))
  group4.AddItem(new ItemModel("13", "Software"))
  group4.AddItem(new ItemModel("14", "Sports"))
  group4.AddItem(new ItemModel("15", "iPhone"))
  group4.AddItem(new ItemModel("16", "Entertainment"))
  group4.AddItem(new ItemModel("17", "Mobile Apps"))
  group4.AddItem(new ItemModel("18", "Health"))
  group4.AddItem(new ItemModel("19", "Fashion"))

  const menu = new MenuModel(viewId, color.newsRed)
  menu.AddGroup(group1)
  menu.AddGroup(group2)
  menu.AddGroup(group3)
  menu.AddGroup(group4)

  return menu
}