import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubCategory = () => {

    return (
        <div>
            <h2>Category based Car toys</h2>
            <Tabs>
                <TabList>
                    <Tab>Sport Car</Tab>
                    <Tab>Turbo truck</Tab>
                    <Tab>police car</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default SubCategory;