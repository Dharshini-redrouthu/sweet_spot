import React, { useState } from 'react';
import CakeList from './CakeList';
import AddCakeForm from './AddCakeForm';
import AdminCarousel from './AdminCarousel';
import { cakeData } from '../../data/cake_data';

const StoreManagement = () => {
  const [cakes, setCakes] = useState(cakeData);
  const [editCake, setEditCake] = useState(null);

  const addCake = (newCake) => {
    setCakes([...cakes, newCake]);
  };

  const updateCake = (updatedCake) => {
    setCakes(cakes.map((cake) => (cake.id === updatedCake.id ? updatedCake : cake)));
    setEditCake(null);
  };

  const deleteCake = (id) => {
    setCakes(cakes.filter((cake) => cake.id !== id));
  };

  const handleEdit = (cake) => {
    setEditCake(cake);
  };

  return (
    <div className="bg-white min-h-screen px-8 py-6 font-[Parastoo]">
      <h1 className="text-5xl text-[rgba(79,79,79,0.66)] mb-6">Store Management</h1>
      <AdminCarousel />
      <AddCakeForm onAdd={addCake} onUpdate={updateCake} editCake={editCake} />
      <CakeList cakes={cakes} onEdit={handleEdit} onDelete={deleteCake} />
    </div>
  );
};

export default StoreManagement;
