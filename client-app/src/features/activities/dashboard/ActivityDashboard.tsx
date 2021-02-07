import React, { useContext } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';

const ActivityDashboard: React.FC = () => {
        const activityStore = useContext(ActivityStore);
        const {editMode, selectedActivity} = activityStore;
    return (
        <Grid>
            <GridColumn width={10}>
                <ActivityList />
            </GridColumn>
            <GridColumn width={6}>
                {
                    selectedActivity && !editMode && (
                        <ActivityDetails />
                    )
                }              
                {
                    editMode && (
                        <ActivityForm 
                            key={selectedActivity && (selectedActivity.id || 0)}
                            activity={selectedActivity!} //! will handle ignore typescript error for null
                        />
                    )
                }                  
            </GridColumn>
        </Grid>
    )
};


export default observer(ActivityDashboard);