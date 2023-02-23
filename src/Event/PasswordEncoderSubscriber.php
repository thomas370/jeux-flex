<?php

namespace App\Event;

use ApiPlatform\Symfony\EventListener\EventPriorities as EventPrioritiesAlias;
use App\Entity\User;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class PasswordEncoderSubscriber implements EventSubscriberInterface {

    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => ['hashPassword', EventPrioritiesAlias::PRE_WRITE]
        ];
    }

    public function hashPassword(ViewEvent $event)
    {
        $result = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($result instanceof User && $method === "POST") {
            $hash = $this->hasher->hashPassword($result, $result->getPassword());
            $result->setPassword($hash);
        }
    }
}