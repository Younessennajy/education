// components/CourseDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from "../components/assets/data/dummydata"
import { FaBook, FaUserGraduate, FaClock, FaLanguage } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="container mx-auto px-4 py-8">Cours non trouvé</div>;
  }

  return (
    <div className="bg-[#F3F4F8] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="h-80 w-full relative">
            <img 
              src={course.cover} 
              alt={course.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-3">
              <span className="bg-blue-700 text-white px-4 py-2 rounded-md">Finance</span>
              <span className="bg-pink-700 text-white px-4 py-2 rounded-md">Style De Vie</span>
            </div>
          </div>

          {/* Course Content */}
          <div className="grid grid-cols-3 gap-8 p-8 md:grid-cols-1">
            {/* Main Content */}
            <div className="col-span-2">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <AiFillStar className="text-orange-500" />
                  <span>4.50 (2 avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUserGraduate />
                  <span>4000+ Étudiants</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">Description du cours</h2>
                <p className="text-gray-600 mb-6">
                  Ce cours complet vous guidera à travers tous les aspects essentiels de {course.title}. 
                  Vous apprendrez les concepts fondamentaux et les applications pratiques à travers des 
                  exercices concrets et des projets réels.
                </p>

                <h2 className="text-xl font-semibold mb-4">Ce que vous apprendrez</h2>
                <ul className="grid grid-cols-2 gap-4 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Maîtrisez les concepts fondamentaux
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Créez des projets pratiques
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Développez des compétences professionnelles
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Obtenez un certificat reconnu
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-primary mb-6">Gratuit</div>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg mb-4 hover:bg-blue-700 transition-colors">
                  S'inscrire maintenant
                </button>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaBook className="text-gray-400" />
                    <span>10 leçons</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-gray-400" />
                    <span>15 heures de contenu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLanguage className="text-gray-400" />
                    <span>Français</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-4">Instructeur</h3>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g"
                      alt="Instructeur"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-medium">Sunil</div>
                      <div className="text-sm text-gray-500">Expert en formation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;