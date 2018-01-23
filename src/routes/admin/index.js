import React from 'react';
import Layout from '../../components/Layout';
import Admin from './Admin';
import CustomAdmin from '../../components/Admin/Admin';
import router from '../../admin_router';

const title = 'Admin Page';
const isAdmin = true;

function action() {
  if (!isAdmin) {
    return { redirect: '/login' };
  }

  return {
    chunks: ['admin'],
    title,
    component: (
      <Layout>
        <Admin title={title} />
      </Layout>
    ),
  };
}

export default action;
