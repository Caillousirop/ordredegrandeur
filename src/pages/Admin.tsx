
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import QuestionValidator from "@/components/admin/QuestionValidator";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="container px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")} 
            className="mr-2"
          >
            <ArrowLeft size={18} />
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Administration</h1>
        </div>
      </div>

      <Tabs defaultValue="validator" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="validator">Validateur</TabsTrigger>
        </TabsList>

        <TabsContent value="validator" className="mt-6">
          <QuestionValidator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
