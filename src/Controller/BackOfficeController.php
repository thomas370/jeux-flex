<?php

// src/Controller/BackOfficeController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

class BackOfficeController extends AbstractController
{
    /**
     * @Route("/backoffice", name="Backoffice")
     * @Security("is_granted('ROLE_ADMIN')")
     */
    public function index(Request $request): Response
    {
        if (!$this->isGranted('ROLE_ADMIN')) {
            throw new AccessDeniedException('Accès limité aux administrateurs.');
        }

        return $this->render('backoffice/index.html.twig', [
            'controller_name' => 'BackOfficeController',
        ]);
    }

    /**
     * @Route("/loginUser", name="LoginUser")
     */
    public function login(): Response
    {
        return $this->render('LoginUser', [
            'controller_name' => 'BackOfficeController',
        ]);
    }
}
