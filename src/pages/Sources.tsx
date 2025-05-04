
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Sources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 py-10">
      <div className="container px-4 py-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Retour au quiz
            </Button>
          </Link>
        </div>
        
        <Card className="border-secondary/30">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Sources des données
            </CardTitle>
            <CardDescription className="text-center">
              Toutes les statistiques utilisées dans ce quiz proviennent de sources officielles et d'études reconnues.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Sources principales</h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 border rounded-md bg-card">
                  <h4 className="font-semibold">INSEE</h4>
                  <p className="text-sm text-muted-foreground">Institut National de la Statistique et des Études Économiques</p>
                  <p className="mt-2 text-sm">Les données démographiques, économiques et sociales proviennent majoritairement des études et rapports de l'INSEE.</p>
                  <a href="https://www.insee.fr" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline block mt-2">
                    insee.fr
                  </a>
                </div>
                
                <div className="p-4 border rounded-md bg-card">
                  <h4 className="font-semibold">Ministère de la Transition Écologique</h4>
                  <p className="text-sm text-muted-foreground">Données environnementales et énergétiques</p>
                  <p className="mt-2 text-sm">Les statistiques concernant le climat, l'environnement et la transition énergétique sont issues des publications du ministère.</p>
                  <a href="https://www.ecologie.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline block mt-2">
                    ecologie.gouv.fr
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Sources par thématique</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Démographie</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-sm">INSEE - Données démographiques 2023</li>
                    <li className="text-sm">Eurostat - Comparaisons européennes</li>
                    <li className="text-sm">Observatoire des territoires - Analyses territoriales</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Économie</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-sm">INSEE - Comptes nationaux</li>
                    <li className="text-sm">Banque de France - Analyses économiques</li>
                    <li className="text-sm">DARES - Études sur l'emploi et les salaires</li>
                    <li className="text-sm">OCDE - Comparaisons internationales</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Éducation</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-sm">Ministère de l'Éducation nationale - Statistiques scolaires</li>
                    <li className="text-sm">DEPP - Évaluations et études sur l'éducation</li>
                    <li className="text-sm">Campus France - Données sur l'enseignement supérieur</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Santé</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-sm">Ministère de la Santé - Statistiques sanitaires</li>
                    <li className="text-sm">DREES - Études et recherches</li>
                    <li className="text-sm">Santé Publique France - Données épidémiologiques</li>
                    <li className="text-sm">Assurance Maladie - Données de remboursement</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Transport</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-sm">Ministère des Transports - Statistiques des transports</li>
                    <li className="text-sm">SNCF - Rapports d'activité</li>
                    <li className="text-sm">RATP - Données d'exploitation</li>
                    <li className="text-sm">Observatoire National des Transports - Études sectorielles</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Technologie et numérique</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-sm">ARCEP - Observatoire du numérique</li>
                    <li className="text-sm">CREDOC - Baromètre du numérique</li>
                    <li className="text-sm">INSEE - Enquêtes sur les TIC</li>
                    <li className="text-sm">Médiamétrie - Études d'audience</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Environnement</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li className="text-sm">ADEME - Données environnementales</li>
                    <li className="text-sm">RTE - Bilans électriques</li>
                    <li className="text-sm">Météo France - Données climatiques</li>
                    <li className="text-sm">Office français de la biodiversité - Études écologiques</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-md text-sm">
              <p className="font-medium mb-2">Note méthodologique</p>
              <p>Les questions de type "market sizing" et d'approximation sont basées sur des données officielles croisées avec des modèles d'estimation. Les ordres de grandeur peuvent varier selon les méthodologies d'enquête et les années de référence.</p>
              <p className="mt-2">Pour des données plus précises ou plus récentes, nous vous invitons à consulter directement les sources mentionnées.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sources;
